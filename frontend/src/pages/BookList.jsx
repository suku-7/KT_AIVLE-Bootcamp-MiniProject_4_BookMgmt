import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, Box, TextField } from '@mui/material';
import BookCard from '../components/BookCard';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const mockData = [
      { id: 1, title: '모두의 자바', author: '홍길동', cover_url: 'https://placehold.co/150x220' },
      { id: 2, title: '리액트를 다루는 기술', author: '홍길동', cover_url: 'https://placehold.co/150x220' },
      { id: 3, title: '스프링 부트 인 액션', author: '크레이그 월즈', cover_url: 'https://placehold.co/150x220' },
      { id: 4, title: '모던 자바스크립트', author: '이이름', cover_url: 'https://placehold.co/150x220' },
      { id: 5, title: 'Vue 마스터북', author: '김철수', cover_url: 'https://placehold.co/150x220' },
    ];
    setBooks(mockData);
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(keyword.toLowerCase()) ||
    book.author.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleCardClick = (id) => {
    navigate(`/books/${id}`);
  };

  return (
    <Box sx={{ px: 35, py: 15, mx: 'auto' }}>
      {/* 상단 영역 */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={600}>도서 목록</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            size="small"
            placeholder="제목 또는 작가 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            sx={{ width: 200, backgroundColor: '#fff' }}
          />
          <Button variant="contained" size="large" onClick={() => navigate('/books/create')}>
            도서 등록
          </Button>
        </Box>
      </Box>

      {/* 목록 영역 */}
      <Grid container spacing={2} justifyContent="flex-start">
        {filteredBooks.map(book => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={book.id}>
            <BookCard book={book} onClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookList;
