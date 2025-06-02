# AIVLE_4차_미니프로젝트_AI를_활용한_북커버_만들기
-----
AIVLE에서 주관하는 4차 미니프로젝트에서 사용한 코드입니다. **Spring boot, React**를 활용하여 'AI를 활용한 북커버 만들기' 웹사이트를 구현했습니다.

👨‍🏫 프로젝트 개요
---
**AI 이미지 생성 기술**과 **Spring Boot**, **React**를 활용하여 **REST API**를 설계 및 구현하였고, **JPA**를 통해 데이터베이스와 연동하였습니다. 또한 **외부 API(OpenAI)** 통합을 통해 도서 표지를 자동 생성하는 기능을 포함한 풀스택 웹 애플리케이션을 성공적으로 개발했습니다.

⏲️ 개발 기간
---
- 2025.05.29(수) ~ 2025.06.02(월)

🧑‍🤝‍🧑 개발자 소개
---
- **변성환** - _Team Leader / PM_
- **김준호** - _Front-End Development Lead / PPT Creator_
- **류근우** - _Front-End Developer / Project Recorder_
- **양준모** - _Front-End Developer / Code Reviewer_
- **양성현** - _Front-End Developer) / Presenter_
- **구현규** - _Back-End Development Lead / Code Reviewer_
- **이소현** - _Back-End Developer / PPT Creator_
- **김동영** - _Back-End Developer / PPT Creator_

💻 개발환경
---
Version : Java 17
IDE : IntelliJ, VS Code
Framework : Spring Boot 2.7.11
ORM : JPA
Version Control: Git, GitHub

⚙️ 기술 스택
---
- Back-End : Java, Spring Boot, Spring MVC (REST API), Spring Data JPA, Lombok
- Front-End : JavaScript (ES6+), React, Axios, React Router, Material-UI (MUI)
- DB : H2 (개발용)
- API : RESTful API, OpenAI API (DALL·E)
- Productivity Tools: Zoom, Microsoft Teams, Notion

📝 프로젝트 아키텍쳐
---
![image](https://github.com/user-attachments/assets/0d89d68a-eea5-40de-87f1-50a5c7db3f9b)

🙋‍♀️ 프로젝트 기능
---
### * 도서 목록 조회

  - `GET /api/books`
  - 설명: 등록된 도서 목록 전체 조회

### - 도서 상세 조회

  - `GET /api/books/{id}`
  - 설명: 등록된 도서 중 도서의 id를 이용해 특정 도서 조회

### -도서 등록

- `POST /api/books`  
- 아래와 같은 형식으로 POST
```json
{
  "title": "책 제목",
  "cover_prompt": "표지 프롬프트",
  "cover_url": "생성된 이미지 링크",
  "author": "작가 이름"
}
```
### - 도서 수정

- `PUT /api/books/{id}`
- 형식은 3번의 json 형식과 동일

### - 도서 삭제

- `DELETE /api/books/{id}`
- 특정 ID의 도서 삭제
