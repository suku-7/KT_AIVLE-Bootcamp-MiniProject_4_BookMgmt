package com.example.book.controller;
import com.example.book.domain.Book;
import com.example.book.dto.BookDTO;
import com.example.book.repository.BookRepository;
import com.example.book.service.BookService;
import jakarta.persistence.Entity;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {


    private final BookService bookService;

    @GetMapping
    public List<Book> getBooks() {
        return bookService.findBooks();
    }

    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.insertBook(book);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.findBook(id);
    }

    @PutMapping("/{id}")
    public Book updateBook(@PathVariable Long id, @RequestBody Book book) {
        return bookService.updateBook(id, book);
    }

    @PatchMapping("/{id}")
    public Book updateBookStatus(@PathVariable Long id, @RequestBody Book book) {
        return bookService.updateBook(id, book.getStatus());
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
    }

    @GetMapping("/search") // /books/search?title=검색어 형태로 호출
    public List<Book> searchBooks(@RequestParam("title") String title) {
        return bookService.searchBooksByTitle(title);
    }


}
