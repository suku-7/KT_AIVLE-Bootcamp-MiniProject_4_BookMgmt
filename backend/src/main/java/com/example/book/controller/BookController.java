// src/main/java/com/example/book/controller/BookController.java
package com.example.book.controller;

import com.example.book.dto.BookDTO;
import com.example.book.dto.CommonResponse;
import com.example.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    // 1. 도서 목록 조회 (GET /api/books)
    @GetMapping
    public ResponseEntity<CommonResponse<List<BookDTO.Response>>> getBooks(
            @RequestParam(value = "title", required = false) String title) {
        return ResponseEntity.ok(bookService.findBooks());
    }

    // 2. 도서 상세 조회 (GET /api/books/{id})
    @GetMapping("/{id}")
    public ResponseEntity<CommonResponse<BookDTO.Response>> getBook(@PathVariable("id") Long id) {
        return ResponseEntity.ok(bookService.findBook(id));
    }

    // 3. 도서 등록 (POST /api/books)
    @PostMapping
    public ResponseEntity<CommonResponse<BookDTO.Response>> createBook(@RequestBody BookDTO.Post bookDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(bookService.insertBook(bookDTO));
    }

    // 4. 도서 수정 (PUT /api/books/{id})
    @PutMapping("/{id}")
    public ResponseEntity<CommonResponse<BookDTO.Response>> updateBook(
            @PathVariable("id") Long id, @RequestBody BookDTO.Put bookDTO) {
        return ResponseEntity.ok(bookService.updateBook(id, bookDTO));
    }

    // 5. 도서 삭제 (DELETE /api/books/{id})
    @DeleteMapping("/{id}")
    public ResponseEntity<CommonResponse<Void>> deleteBook(@PathVariable("id") Long id) {
        return ResponseEntity.ok().body(bookService.deleteBook(id));
    }
}