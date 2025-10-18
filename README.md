# 🧩 ReserveRoom-FE

📚 **스터디룸 예약 웹 서비스 (Front-End)**  
교내 스터디룸 예약 시스템
React + TypeScript + Vite 환경에서 동작

---

## 🧠 서비스 개요

**서비스명:** ReserveRoom  
**서비스 설명:**  
학교 내 스터디룸(큐브, 스매시룸)의 예약, 변경, 취소, 현황 조회 기능을 제공하는 웹 서비스입니다.  
학생들이 간편하게 실시간 예약 상태를 확인하고 이용할 수 있도록 설계되었습니다.


---


## 🧱 프로젝트 구조

```bash
src/
├── assets/               # 아이콘, 이미지 등 정적 파일
├── components/           # 공통 UI 컴포넌트
│   ├── common/           # Header 등 공용 컴포넌트
│   └── layout/           # Layout 관련 컴포넌트
├── pages/                # 각 페이지 (Home, Mypage, Cube, SmashRoom 등)
├── routes/               # 라우팅 설정 파일
├── App.tsx               # 메인 App 컴포넌트
├── main.tsx              # 엔트리 포인트
└── vite.config.ts        # Vite 환경 설정
```


### 🚀 실행 방법 (How to Run)

### 1️⃣ 패키지 설치 (Install dependencies)
```bash
npm install
````

### 2️⃣ 개발 서버 실행 (Start development server)

```bash
npm run dev
```

### 3️⃣ 빌드 (Build production files)

```bash
npm run build
```


## 🧾 커밋 메시지 규칙 (Commit Message Convention)


| 타입(Type)     | 설명(Description)                 |
| ------------ | ------------------------------- |
| **feat**     | 새로운 기능 추가                     |
| **fix**      | 버그 수정                        |
| **docs**     | 문서 수정 (README 등)             |
| **style**    | 코드 포맷팅, 세미콜론 누락 등 (로직 변경 없음) |
| **refactor** | 코드 리팩토링 (기능 변화 없음)           |
| **test**     | 테스트 코드 추가 및 수정                |
| **chore**    | 빌드, 패키지 매니저 설정 등 기타 작업       |
| **comment**  | 주석 추가 및 변경                   |
| **remove**   | 불필요한 파일, 폴더 삭제              |
| **rename**   | 파일명 또는 폴더명 수정                |