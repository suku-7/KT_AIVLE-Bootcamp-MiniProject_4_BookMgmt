import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/books",
});

export const getBooks = () => api.get("/");
export const getBook = (id) => api.get(`/${id}`);
export const createBook = (data) => api.post("/", data);
export const updateBook = (id, data) => api.put(`/${id}`, data);
export const deleteBook = (id) => api.delete(`/${id}`);
export const generateCover = (id) => api.post(`/${id}/generate-cover`);
