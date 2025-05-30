// src/main/java/com/example/book/service/BookServiceImpl.java
package com.example.book.service;

import com.example.book.domain.Book;
import com.example.book.dto.BookDTO;
import com.example.book.dto.CommonResponse;
import com.example.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.EntityNotFoundException; // 'javax.persistence' -> 'jakarta.persistence'로 변경
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    @Transactional
    public CommonResponse<BookDTO.Response> insertBook(BookDTO.Post bookDTO) {
        Book book = new Book();
        book.setTitle(bookDTO.getTitle());
        book.setCover_prompt(bookDTO.getCover_prompt());
        book.setCover_url(bookDTO.getCover_url());
        book.setAuthor(bookDTO.getAuthor());

        Book savedBook = bookRepository.save(book);
        return CommonResponse.success(new BookDTO.Response(savedBook), "도서가 성공적으로 등록되었습니다.");
    }

    @Override
    public CommonResponse<List<BookDTO.Response>> findBooks() {
        List<BookDTO.Response> books = bookRepository.findAll().stream()
                .map(BookDTO.Response::new)
                .collect(Collectors.toList());
        return CommonResponse.success(books, "도서 목록을 성공적으로 조회했습니다.");
    }

    @Override
    public CommonResponse<BookDTO.Response> findBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Book with id " + id + " not found"));
        return CommonResponse.success(new BookDTO.Response(book), "도서 정보를 성공적으로 조회했습니다.");
    }

    @Override
    @Transactional
    public CommonResponse<BookDTO.Response> updateBook(Long id, BookDTO.Put bookDTO) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Book with id " + id + " not found"));

        book.setTitle(bookDTO.getTitle());
        book.setCover_prompt(bookDTO.getCover_prompt());
        book.setCover_url(bookDTO.getCover_url());
        book.setAuthor(bookDTO.getAuthor());

        Book updatedBook = bookRepository.save(book);
        return CommonResponse.success(new BookDTO.Response(updatedBook), "도서가 성공적으로 수정되었습니다.");
    }

    @Override
    @Transactional
    public CommonResponse<Void> deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new EntityNotFoundException("Book with id " + id + " not found");
        }
        bookRepository.deleteById(id);
        return CommonResponse.success(null, "도서가 성공적으로 삭제되었습니다.");
    }

    @Override
    public CommonResponse<List<BookDTO.Response>> searchBooksByTitle(String title) {
        List<BookDTO.Response> books = bookRepository.findByTitleContainingIgnoreCase(title).stream()
                .map(BookDTO.Response::new)
                .collect(Collectors.toList());
        return CommonResponse.success(books, "도서 제목으로 검색한 목록을 성공적으로 조회했습니다.");
    }

}