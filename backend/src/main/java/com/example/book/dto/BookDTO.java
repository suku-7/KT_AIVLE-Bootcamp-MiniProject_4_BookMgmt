// src/main/java/com/example/book/dto/BookDTO.java
package com.example.book.dto;

import com.example.book.domain.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime; // LocalDateTime 사용을 위해 명시적으로 추가 (DTO에서 사용하므로)

public class BookDTO {

    // (POST) 명세서 도서 등록 요청 데이터에 맞춤
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String cover_prompt;
        private String cover_url;
        private String author;
        // subTitle, publisher, status 필드 삭제
    }

    // (PUT) 명세서 도서 수정 요청 데이터에 맞춤
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Put {
        private String title;
        private String cover_prompt;
        private String cover_url;
        private String author;
        // subTitle, publisher, status 필드 삭제
    }

    // Response DTO (명세서 응답 데이터 구조에 맞춤)
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long id;
        private String title;
        private String cover_prompt;
        private String cover_url;
        private String author;
        private LocalDateTime created_at;
        private LocalDateTime updated_at;

        // Book 엔티티를 받아서 DTO로 변환하는 생성자
        public Response(Book book) {
            this.id = book.getId();
            this.title = book.getTitle();
            this.cover_prompt = book.getCover_prompt();
            this.cover_url = book.getCover_url();
            this.author = book.getAuthor();
            this.created_at = book.getCreated_at();
            this.updated_at = book.getUpdated_at();
            // subTitle, publisher, status 필드 삭제
        }
    }


}