// src/pages/BookEdit.jsx

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';
import { getBook, updateBook } from '../api/bookApi';


function BookEdit() {
  const {id} = useParams();
  const navigate = useNavigate()
  const [book, setBook] = useState(null);

  /*
  useEffect(() => {
    getBook(id).then((res) => setBook(res.data.data))
    // getBook(id).then((res) => setBook(res.data))
  }, [id]);
*/

  useEffect(() => {  // 테스트데이터
    // 백엔드 요청 대신 mock 데이터 사용
    const mockBook = {
      id: 1,
      title: "모두의 자바",
      author: "홍길동",
      cover_prompt: "프롬프트 예시",
      cover_url: "https://placehold.co/150x220",
    };
    setBook(mockBook);
  }, []);


  const handleSubmit = async (updatedBook) => {
    try {
      await updateBook(id, updatedBook);
      alert("도서가 성공적으로 수정되었습니다.");
      navigate(`/books/${id}`);
    } catch (err) {
      console.error("도서 수정 실패:", err);
      alert("도서 수정에 실패했습니다.");
    }
  };


  return (
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
        <h2>도서 정보 수정</h2>
        {book ? (
            <BookForm initialValues={book} onSubmit={handleSubmit} />
        ) : (
            <p>도서 정보를 불러오는 중입니다...</p>
        )}
      </div>
  );
}


export default BookEdit;
