// frontend/src/pages/BookList.jsx
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Box, TextField, CircularProgress, Alert } from '@mui/material';
import BookCard from '../components/BookCard';
import { useNavigate } from 'react-router-dom';
import { getBooks } from '../api/bookApi'; // 🟡 이 임포트가 반드시 있어야 합니다.

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);

        // 🟡 이 mockData 부분은 반드시 제거되어야 합니다.
        // const mockData = [ ... ];
        // setBooks(mockData);

        // 🟡 이 부분이 활성화되어야 합니다.
        const response = await getBooks(); // bookApi.js의 getBooks 함수 호출
        if (response.data && response.data.data) {
          setBooks(response.data.data);
        } else {
          setBooks([]);
          setError("도서 목록을 불러오는 데 실패했습니다. 데이터 형식이 올바르지 않습니다.");
        }
      } catch (err) {
        console.error("도서 목록 조회 중 오류 발생:", err);
        setError("도서 목록을 불러오는 데 실패했습니다. 서버 상태를 확인해주세요.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []); // 의존성 배열은 비워둡니다 (컴포넌트 마운트 시 한 번만 실행)

  const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(keyword.toLowerCase()) ||
      book.author.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleCardClick = (id) => {
    navigate(`/books/${id}`);
  };

  return (
      <Box sx={{ px: { xs: 2, sm: 5, md: 10, lg: 35 }, py: 5, mx: 'auto' }}>
        <Box sx={{ mb: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2 }}>
          <Typography variant="h4" fontWeight={600}>도서 목록</Typography>
          <Box sx={{ display: 'flex', gap: 2, width: { xs: '100%', sm: 'auto' }, flexDirection: { xs: 'column', sm: 'row' } }}>
            <TextField
                fullWidth={window.innerWidth < 600}
                size="small"
                placeholder="제목 또는 작가 검색"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                sx={{ backgroundColor: '#fff' }}
            />
            <Button variant="contained" size="large" onClick={() => navigate('/books/create')} sx={{ width: { xs: '100%', sm: 'auto' } }}>
              새 도서 등록
            </Button>
          </Box>
        </Box>

        {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <CircularProgress />
              <Typography sx={{ ml: 2 }}>도서 목록을 불러오는 중...</Typography>
            </Box>
        ) : error ? (
            <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>
        ) : filteredBooks.length === 0 ? (
            <Alert severity="info" sx={{ my: 2 }}>
              {keyword ? "검색 결과가 없습니다." : "등록된 도서가 없습니다."}
            </Alert>
        ) : (
            <Grid container spacing={2} justifyContent="flex-start">
              {filteredBooks.map(book => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={book.id}>
                    <BookCard book={book} onClick={handleCardClick} />
                  </Grid>
              ))}
            </Grid>
        )}
      </Box>
  );
};

export default BookList;