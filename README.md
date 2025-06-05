# [KT-AIVLE] 미니 프로젝트 4차 도서관리 시스템 웹서비스 만들기

## **📝 프로젝트 목적** 

도서 관리 시스템을 개발하는 미니 프로젝트  
- 도서 등록, 조회, 수정, 삭제와 함께 AI 이미지 생성 기능 을 연동하여 커버 이미지를 생성
- 풀스택 개발과 외부 API(OpenAI) 활용 경험을 목표로, 요구사항 분석부터 ERD 설계, 구현까지 실습

---
### 📅 개발 기간 : 2025.05.29 (목) ~ 06.02(월)  
### 👥 AI_04반_11조 : 변성환, 구현규, 김동영, 김준호, 류근우, 양성현, 양준모, 이소현  
---
### 🧑‍🤝‍🧑 개발자 소개  
- **변성환** - _Team Leader / PM_
- **김준호** - _Front-End Development Lead / PPT Creator_
- **류근우** - _Front-End Developer / Project Recorder_
- **양준모** - _Front-End Developer / Code Reviewer_
- **양성현** - _Front-End Developer) / Presenter_
- **구현규** - _Back-End Development Lead / Code Reviewer_
- **이소현** - _Back-End Developer / PPT Creator_
- **김동영** - _Back-End Developer / PPT Creator_
---
### 📁 미니 프로젝트 4차 Notion  
[KT-AIVLE 미니 프로젝트 4차 도서관리 시스템 웹서비스 만들기 Notion 상세 설명 및 회의록](https://www.notion.so/KT-AIVLE-4-1f8d02208fab80248207e20fb64d51df)  
- [도서 관리 시스템 - 프로젝트 포팅 가이드](https://www.notion.so/206d02208fab80578d09e07158b42d2f)  
- [도서 관리 시스템 - 상세 API 명세서](https://www.notion.so/API-203d02208fab801e85ffc0868f606468)  
---
## **📝 도서 관리 시스템 결과물**

![스크린샷 2025-06-02 145205](https://github.com/user-attachments/assets/e83a36dd-fcb5-48da-ba2c-ddee1ea0440f)
![스크린샷 2025-06-02 152711](https://github.com/user-attachments/assets/1f0b6308-f12b-4c46-8bdf-a490ed0cb69a)

---
## **📝 주요 기능**

- 도서 관리: 생성, 조회, 수정, 삭제 (CRUD)
- AI 기능:
    - GPT-4.1-mini 프롬프트 개선
    - DALL-E-3: 맞춤형 표지 이미지 생성
- UI/UX : 모달기능 추가하여, 편리하고 직관적으로 확인, 수정가능.
  
--- 
## **📝 프로젝트 기본 아키텍처**
![스크린샷 2025-06-02 213307](https://github.com/user-attachments/assets/3be55bce-c382-4d91-8023-82807d0fad7f)

--- 
## 📝 **개발 환경 / 기술 스택**

### 👨‍💻 Front-End

- **Language**: JavaScript (ES6+)
- **Framework**: React 19.x
- **Build Tool**: Vite
- **Routing**: React Router
- **HTTP Client**: Axios
- **UI Library**: Material-UI (@mui/material)
- **Styling**: Emotion (@emotion/react, @emotion/styled)
- **Date/Time**: Moment.js
- **IDE**: Visual Studio Code

### 👨‍💻 Back-End

- **Language**: Java 17
- **Framework**: Spring Boot 3.5.0
- **Architecture**: RESTful API, MVC
- **ORM**: JPA (Hibernate)
- **Database**: H2 (In-memory, development)
- **Build Tool**: Gradle
- **Other**: Lombok, CORS 설정
- **IDE**: IntelliJ IDEA

### 🤖 AI Integration

- **OpenAI API**: GPT-4.1-mini, DALL·E 3
- **Features**:
    - 프롬프트 기반 도서 정보 요약
    - 도서 커버 이미지 생성

### 📦 Version Control & Tools

- **VCS**: Git & GitHub
- **Collaboration Tools**: Notion, Zoom, Microsoft Teams
--- 
## 📝 ERD/API
![스크린샷 2025-06-05 213837](https://github.com/user-attachments/assets/2c4e2960-6e38-412b-9160-e44aa146e762)

---
**프로젝트 구조**

aivle_4th_bookmp/

├── backend/                         # 백엔드 (Spring Boot)
│   ├── build/
│   ├── .gradle/
│   ├── gradle/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/book/
│   │       │   ├── config/             # 보안 및 웹 설정
│   │       │   │   ├── SecurityConfig.java
│   │       │   │   └── WebConfig.java
│   │       │   ├── controller/         # REST API 컨트롤러
│   │       │   │   └── BookController.java
│   │       │   ├── domain/             # 도메인 엔티티
│   │       │   │   └── Book.java
│   │       │   ├── dto/                # 데이터 전송 객체
│   │       │   │   ├── BookDTO.java
│   │       │   │   └── CommonResponse.java
│   │       │   ├── repository/         # 데이터 접근 계층 (JPA)
│   │       │   │   └── BookRepository.java
│   │       │   ├── service/            # 비즈니스 로직
│   │       │   │   ├── BookService.java
│   │       │   │   └── BookServiceImpl.java
│   │       │   └─── BookApplication.java
│   │       └── resources/
│   │           ├── application.yml     # 환경 설정
│   │           ├── data.sql            # 초기 데이터
│   │           └── static/             # 정적 리소스
│   ├── build.gradle
│   ├── gradlew
│   ├── gradlew.bat
│   ├── settings.gradle
│   ├── .gitignore
│   └── [README.md](http://readme.md/)

└── frontend/                         # 프론트엔드 (React + Vite)
├── public/
│   └── images/                    # 이미지 리소스
├── src/
│   ├── api/                       # API 통신 모듈
│   │   └── bookApi.js
│   ├── components/                # 재사용 가능한 컴포넌트
│   │   ├── BookCard.jsx
│   │   ├── BookForm.jsx
│   │   ├── BookModal.jsx
│   │   └── CoverGeneratorButton.jsx
│   ├── pages/                     # 페이지 단위
│   │   └── BookList.jsx
│   ├── router/                    # 라우팅 구성
│   │   └── Router.jsx
│   ├── App.jsx                    # 루트 컴포넌트
│   └── main.jsx                  
├── .env                           # 환경 변수(OpenAI API 저장)
├── .gitignore
├── eslint.config.js              
├── index.html                    
├── package.json
├── package-lock.json
├── vite.config.js                
└── [README.md](http://readme.md/)


