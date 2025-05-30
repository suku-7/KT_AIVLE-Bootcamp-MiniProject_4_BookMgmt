package com.example.book.service;

import com.example.book.domain.Book;
import com.example.book.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServicelmpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public Book insertBook(Book book) {
        book.setStatus(Book.Status.AVAILABLE);
        return bookRepository.save(book);
    }

    @Override
    public List<Book> findBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book findBook(Long id) {
        return bookRepository.findById(id).orElseThrow(
                ()-> new EntityNotFoundException("Book with id " + id + " not found")
        );
    }

    @Override
    public Book updateBook(Long id, Book book) {

        Book b = findBook(id);
        b.setTitle(book.getTitle());
        b.setTitle(book.getSubTitle());
        b.setAuthor(book.getAuthor());
        b.setPublisher(book.getPublisher());
        b.setStatus(book.getStatus());
        return bookRepository.save(b);

    }

    @Override
    public Book updateBook(Long id, Book.Status status){
        Book b = findBook(id);
        b.setStatus(status);
        return bookRepository.save(b);
    }

    @Override
    public void deleteBook(Long id){
        bookRepository.deleteById(id);
    }

    @Override
    public List<Book> searchBooksByTitle(String title) {
        // 제목에 'title' 문자열이 포함된 책을 검색합니다.
        // 대소문자 구분 없이 검색하려면 JpaRepository에 Query Method를 추가해야 합니다.
        // 예: List<Book> findByTitleContainingIgnoreCase(String title);
        return bookRepository.findByTitleContainingIgnoreCase(title); // <--- 이 부분이 필요
    }
}
