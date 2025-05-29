package com.miniproject4.team11.bookapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // 모든 URL
                .allowedOrigins("http://localhost:5173")  // React 개발 서버 주소
                .allowedMethods("*")                      // GET, POST, PUT, DELETE 등 모두 허용
                .allowCredentials(true);                  // 인증정보 포함 허용 (선택사항)
    }
}