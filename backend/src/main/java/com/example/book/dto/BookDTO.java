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
        private String coverPrompt;
        private String coverUrl;
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
        private String coverPrompt;
        private String coverUrl;
        private String author;
        // subTitle, publisher, status 필드 삭제
    }

    // (PATCH) 명세서에 없으므로 삭제
    // @Getter
    // @Setter
    // @NoArgsConstructor
    // @AllArgsConstructor
    // public static class Patch {
    //     private Book.Status status;
    // }

    // Response DTO (명세서 응답 데이터 구조에 맞춤)
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private Long id;
        private String title;
        private String coverPrompt;
        private String coverUrl;
        private String author;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        // Book 엔티티를 받아서 DTO로 변환하는 생성자
        public Response(Book book) {
            this.id = book.getId();
            this.title = book.getTitle();
            this.coverPrompt = book.getCoverPrompt();
            this.coverUrl = book.getCoverUrl();
            this.author = book.getAuthor();
            this.createdAt = book.getCreatedAt();
            this.updatedAt = book.getUpdatedAt();
            // subTitle, publisher, status 필드 삭제
        }
    }


}