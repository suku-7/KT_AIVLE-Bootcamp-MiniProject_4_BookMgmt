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
## **📝 ERD/API**
![스크린샷 2025-06-05 213837](https://github.com/user-attachments/assets/2c4e2960-6e38-412b-9160-e44aa146e762)

---
## **📝 프로젝트 구조**

![스크린샷 2025-06-05 214138](https://github.com/user-attachments/assets/11811e67-f0ef-406b-a95d-55e27f8e136a)  
![스크린샷 2025-06-05 214148](https://github.com/user-attachments/assets/12f4d5d1-a42e-443b-88f6-7b5af8626052)  

---

## **🚀 backend Features**
![스크린샷 2025-06-05 214321](https://github.com/user-attachments/assets/50289877-2e61-49a4-b3e0-1d4155cbfda2)

## **🚀 frontend Features**
![스크린샷 2025-06-05 214349](https://github.com/user-attachments/assets/2fff1a7a-2eb4-4d79-b244-78fa1e31636b)

---
## ✅ 나의 주요 기여 (My Key Contributions)

[프론트엔드] 도서 상세 정보 화면 개발:  
- 도서의 상세 정보를 보여주는 Details 화면을 추가하고, 필요한 데이터 연동 및 UI를 구현하여 사용자 경험을 향상시켰습니다.

[인공지능/프롬프트 엔지니어링] DALL-E 이미지 생성 프롬프트 자동 개선 기능 구현:  
- 사용자가 입력한 프롬프트를 GPT-4.1 Mini 모델이 자동으로 검토하고 책 표지 이미지 생성에 최적화된 형태로 수정한 후 DALL-E에 전달하는 기능을 개발했습니다. 이를 통해 더욱 정교하고 의도에 부합하는 이미지 결과물을 얻을 수 있도록 시스템의 지능을 개선했습니다.

[문서화/커뮤니케이션] 프로젝트 성과 발표 및 자료 지원:
- 프로젝트 진행 중 발생한 논의사항, 결정 사항, 그리고 작업 내용을 노션에 체계적으로 기록하고 관리했습니다.
- 프로젝트의 핵심 기능을 시각적으로 효과적으로 전달하기 위한 이미지 생성 작업을 수행하고, 최종 결과물 및 과정 설명을 위한 PPT 작업을 지원했습니다.
 
## ✅ 결론: 작업 결과 + 도출된 인사이트  

이번 4차 미니 프로젝트에서 우리 11조는 도서 관리 시스템의 기본적인 CRUD 기능에 더해, OpenAI의 이미지 생성 API를 활용하여 도서 커버 이미지를 생성하여 등록하는 기능을 구현하는 것을 목표로 했습니다.  

### 🛠 작업 결과  

**프론트엔드**  

- React를 활용해 도서 목록 조회, 상세 조회, 등록, 수정, 삭제 화면을 구현했습니다.  
- 도서 등록, 수정 화면에서 OpenAI 이미지 생성 기능을 연동하여, 사용자가 도서를 등록할 때 AI가 생성한 커버 이미지를 활용할 수 있도록 구현했습니다.  
- 라우터 기반의 화면 전환을 모달 팝업 형태로 개선하여 UI/UX 향상을 시도했습니다.  

**백엔드**  

- Spring Boot 기반으로 도서 관련 CRUD API와 OpenAI API 연동 기능을 개발했습니다.  
- 도서 등록 시 반환된 이미지 URL을 포함한 데이터를 H2 DB에 저장하는 기능을 구현했습니다.  

**프론트/백 통합**  

- 전체 데이터 흐름을 통합하고, 이미지 생성 후 해당 URL이 DB에 저장되는 전 과정을 테스트했습니다.  
- React와 Spring Boot 간 통신을 위해 CORS 설정을 적용하여 안정적인 API 호출이 가능하도록 설정했습니다.  
- build.gradle을 통해 백엔드에서 통합된 프로그램 실행 및 의존성 관리를 효율적으로 수행할 수 있도록 구성했습니다.  

### 💡 도출된 인사이트  

**AI API 활용의 가능성**  

- OpenAI의 이미지 생성 API를 도서 관리 시스템에 적용해보며, AI 기술이 사용자 경험을 향상시킬 수 있는 잠재력을 확인했습니다.  

**풀스택 협업 경험**  

- 프론트엔드와 백엔드가 긴밀히 협력하여 하나의 기능을 완성하는 과정을 통해, 소통과 역할 분담의 중요성을 체감했습니다.  

---

이번 프로젝트를 통해 기술적 이해도를 높이고, 실제 서비스 구현과 협업의 경험을 쌓을 수 있었습니다. 향후 더욱 심화된 기술 학습과 경험을 바탕으로, 한 단계 더 성장한 개발자가 되도록 노력하겠습니다.  

즐겁다! 재밌다! ✧*｡٩('ᗜ')و✧｡  

---

