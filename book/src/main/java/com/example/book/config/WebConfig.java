package com.example.book.config; // 패키지 경로를 여러분의 프로젝트에 맞게 수정해주세요.

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // 이 클래스가 스프링 설정(Configuration) 클래스임을 명시합니다.
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 API 경로 (예: /api/test)에 대해 CORS를 허용합니다.
                .allowedOrigins("http://localhost:3000") // <--- 중요: React 개발 서버의 주소를 정확히 입력합니다.
                // 만약 다른 포트에서 실행된다면 해당 포트로 변경하세요.
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드를 지정합니다.
                .allowedHeaders("*") // 모든 종류의 HTTP 헤더를 허용합니다.
                .allowCredentials(true); // 요청에 쿠키나 인증 정보(자격 증명)를 포함할 수 있도록 허용합니다.
        // 세션 기반 인증 등을 사용할 때 필요합니다.
    }
}