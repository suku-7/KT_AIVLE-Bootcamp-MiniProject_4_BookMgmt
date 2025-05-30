// src/main/java/com/example/book/BookApplication.java
package com.example.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing; // Auditing 활성화를 위해 추가

@SpringBootApplication
@EnableJpaAuditing // Auditing 활성화
public class BookApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookApplication.class, args);
	}
}