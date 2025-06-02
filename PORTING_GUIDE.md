# 📦 AIVLE Book 프로젝트 포팅 가이드

> 🛠 **Java 17**, **Git Bash** 권장  
> 🌐 **프론트 실행 불필요 – `http://localhost:8080`에서 통합 제공**

---

## ✅ 사전 준비

- Java 17 이상 설치
- Git 설치
- Git Bash 또는 WSL 사용 권장 (Windows CMD/Powershell 대신)
- OpenAI API Key 발급 → https://platform.openai.com/api-keys

---

## 1. 프로젝트 클론

```bash
git clone https://github.com/jakebyun/aivle_4th_bookmp.git
cd aivle_4th_bookmp
````

---

## 2. OpenAI API Key 설정 (.env)

프론트엔드 폴더로 이동하여 `.env` 파일 생성:

```bash
cd frontend
touch .env
```

`.env` 파일에 다음 내용 입력:

```
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> ⚠️ `.env`는 Git에 포함되지 않으며 직접 입력해야 합니다.

---

## 3. 백엔드 빌드 및 실행

```bash
cd ../backend
./gradlew.bat build
./gradlew bootRun
```

* `./gradlew.bat`는 Git Bash 또는 WSL 환경에서 실행 권장
* 성공 시 [`http://localhost:8080`](http://localhost:8080) 접속

---

## 📌 접속 요약

| 항목        | 설명                                             |
| --------- | ---------------------------------------------- |
| 웹 접속      | [http://localhost:8080](http://localhost:8080) |
| API 경로    | `/api/books`                                   |
| OpenAI 기능 | GPT 프롬프트 보정 및 DALL·E 3 이미지 생성 포함               |
| 실행 방식     | 백엔드에서 프론트 정적 파일 자동 서빙                          |

---

## 💬 참고 사항

* Java 17 미만 버전 사용 시 실행 오류 발생 가능
* 프론트엔드 별도 실행 불필요
* `.env` 미설정 시 이미지 생성 기능 동작하지 않음