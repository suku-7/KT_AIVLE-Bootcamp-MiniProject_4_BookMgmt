// src/pages/BookDetail.jsx

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBook } from "../api/bookApi";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [localImage, setLocalImage] = useState(null);
/*
  // 데이터 불러오기
  useEffect(() => {
    getBook(id).then((res) => setBook(res.data)).catch(() => {
      alert("도서 정보를 불러오는 데 실패했습니다.");
    });
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
  // 삭제 요청
  const handleDelete = async () => {
    const confirm = window.confirm("이 도서를 삭제하시겠습니까?");
    if (!confirm) return;

    try {
      const res = await deleteBook(id);
      if (res.status === "success") {
        alert(res.message);
        navigate("/books");
      } else {
        alert("삭제에 실패했습니다.");
      }
    } catch (err) {
      console.error(err);
      alert("서버 오류로 인해 삭제에 실패했습니다.");
    }
  };

  const handleEdit = () => {
    navigate(`/books/${id}/edit`);
  };

  if (!book) return <p>불러오는 중...</p>;

  return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
          <h2 style={{ fontWeight: "bold" }}></h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
                onClick={handleDelete}
                style={{
                  backgroundColor: "#f8d7da",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
            >
              도서 삭제
            </button>
            <button
                onClick={handleEdit}
                style={{
                  backgroundColor: "#81c784",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
            >
              수정
            </button>
            <button
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "#d1ecf1",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
            >
              Home
            </button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
          {/* 이미지 영역 */}
          <img
              src={book.cover_url || "https://placehold.co/200x300?text=No+Image"}
              alt="책 이미지"
              style={{ width: "280px", height: "auto", borderRadius: "8px" }}
          />

          {/* 도서 정보 */}
          <div style={{ flex: "1" }}>
            <label style={{ fontWeight: "bold" }}>작품 제목</label>
            <input value={book.title} readOnly style={inputStyle} />

            <label style={{ fontWeight: "bold" }}>작품 작가</label>
            <input value={book.author} readOnly style={inputStyle} />

            <label style={{ fontWeight: "bold" }}>시간</label>
            <textarea
                readOnly
                style={{ ...inputStyle, height: "60px" }}
                value={
                  `도서 생성 날짜 : ${book.created_at || "N/A"}\n도서 수정 날짜 : ${book.updated_at || "N/A"}`
                }
            />

          </div>
        </div>
      </div>
  );
}

const inputStyle = {
  width: "100%",
  marginBottom: "15px",
  padding: "10px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f9f9f9"
};

export default BookDetail;