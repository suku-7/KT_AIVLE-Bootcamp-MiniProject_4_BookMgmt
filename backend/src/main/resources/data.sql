-- 1. 기존 데이터 모두 삭제

DELETE FROM book;

-- 2. 새로운 초기 데이터 삽입

INSERT INTO book (title, cover_prompt, cover_url, author, created_at, updated_at)

VALUES
    ('랭체인과 RAG로 배우는 실전 LLM 애플리케이션 개발', '스프링 마스터 가이드', 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791158395988.jpg', '양기빈', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('스프링4 입문', '데이터베이스와 객체지향의 만남', 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162240212.jpg', '하세가와 유이치', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('처음부터 시작하는 Next.js React 개발 입문', '데이터베이스와 객체지향의 만남', 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791127468507.jpg', '미요시 아키', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);