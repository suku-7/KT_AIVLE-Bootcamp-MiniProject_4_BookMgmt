// src/main/java/com/example/book/service/BookService.java
package com.example.book.service;

// import com.example.book.domain.Book; // 더 이상 Book.Status를 직접 사용하지 않으므로 삭제
import com.example.book.dto.BookDTO;
import com.example.book.dto.CommonResponse; // CommonResponse 사용을 위해 추가
import java.util.List;

public interface BookService {
    CommonResponse<BookDTO.Response> insertBook(BookDTO.Post bookDTO);
    CommonResponse<List<BookDTO.Response>> findBooks();
    CommonResponse<BookDTO.Response> findBook(Long id);
    CommonResponse<BookDTO.Response> updateBook(Long id, BookDTO.Put bookDTO);
    // CommonResponse<BookDTO.Response> updateBookStatus(Long id, Book.Status status); // 명세서에 없으므로 삭제
    CommonResponse<Void> deleteBook(Long id); // 삭제는 data가 없으므로 Void
    CommonResponse<List<BookDTO.Response>> searchBooksByTitle(String title);

}