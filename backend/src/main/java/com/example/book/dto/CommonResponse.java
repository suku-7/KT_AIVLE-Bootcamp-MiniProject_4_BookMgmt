// src/main/java/com/example/book/dto/CommonResponse.java
package com.example.book.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CommonResponse<T> {
    private String status; // "success", "fail", "error"
    private T data;
    private String message;

    // 성공 응답 생성자
    public static <T> CommonResponse<T> success(T data, String message) {
        return new CommonResponse<>("success", data, message);
    }

    public static <T> CommonResponse<T> success(T data) {
        return new CommonResponse<>("success", data, "요청 성공");
    }

    // 실패 응답 생성자 (예: 비즈니스 로직 상의 실패)
    public static <T> CommonResponse<T> fail(T data, String message) {
        return new CommonResponse<>("fail", data, message);
    }

    // 에러 응답 생성자 (예: 시스템 에러, 예외 발생)
    public static CommonResponse<Object> error(String message) {
        return new CommonResponse<>("error", null, message);
    }
}