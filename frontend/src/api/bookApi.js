// src/api/bookApi.js

import axios from "axios";

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "http://localhost:8080/api/books",
  headers: {
    "Content-Type": "application/json",
  },
});

// 도서 전체 목록 조회
export const getBooks = () => api.get();

// 도서 상세 조회
export const getBook = (id) => api.get(`/${id}`);

// 도서 등록
export const createBook = (data) => api.post("/", data);

// 도서 수정
export const updateBook = (id, data) => api.put(`/${id}`, data);

// 도서 삭제
export const deleteBook = (id) => api.delete(`/${id}`);

// 도서 표지 생성 (기능 확장용 API)
export const generateCover = (id) => api.post(`/${id}/generate-cover`);

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8080/api/books",
// });

// export const getBooks = () => api.get("/");
// export const getBook = async (id) => {
//   const res = await fetch(`/api/books/${id}`);
//   return await res.json();
// };
// export const createBook = (data) => api.post("/", data);
// export const updateBook = async (id, data) => {
//   const res = await fetch(`/api/books/${id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return await res.json();
// }
// export const deleteBook = async (id) => {
//   const res = await fetch(`/api/books/${id}`, {
//     method: 'DELETE',
//   });

//   if (!res.ok) {
//     throw new Error('삭제 실패');
//   }
//   return await res.json();
// };
// export const generateCover = (id) => api.post(`/${id}/generate-cover`);