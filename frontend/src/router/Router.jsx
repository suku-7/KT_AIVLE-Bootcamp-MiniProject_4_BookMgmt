// src/router/Router.jsx

import { Routes, Route } from "react-router-dom";
import BookList from "../pages/BookList";
import BookDetail from "../pages/BookDetail";
import BookCreate from "../pages/BookCreate";
import BookEdit from "../pages/BookEdit";

const Router = () => (
  <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/create" element={<BookCreate />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/books/edit/:id" element={<BookEdit />} />
        <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

export default Router;
