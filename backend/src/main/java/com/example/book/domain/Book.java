// src/main/java/com/example/book/domain/Book.java
package com.example.book.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.*; // 원본 파일에 이미 존재
import java.time.LocalDateTime; // 원본 파일에 이미 존재

// Auditing을 위해 추가 (필수)
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class) // Auditing 리스너 활성화
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255) // 명세서 title
    private String title;

    @Column(length = 1000) // 명세서 cover_prompt
    private String cover_prompt;

    @Column(length = 500) // 명세서 cover_url
    private String cover_url;

    @Column(nullable = false, length = 255) // 명세서 author
    private String author;

    @CreatedDate // 명세서 created_at
    @Column(updatable = false) // 최초 생성 시에만 값 설정, 이후 업데이트 불가
    private LocalDateTime created_at;

    @LastModifiedDate // 명세서 updated_at
    private LocalDateTime updated_at;

    // 명세서에 없는 필드들은 모두 삭제 (subTitle, publisher, status)
    // public enum Status { BORROWED, AVAILABLE } 도 삭제
}