// src/components/layout/Layout.styled.ts
import styled from "styled-components";

export const LayoutContainer = styled.div`
  /* 폭: 모바일 프레임 (데스크탑에서도 가운데 360~400px 박스) */
  min-width: 360px;
  max-width: 400px;
  margin: 0 auto;
  background: #f7f8f9;

  /* 높이: 화면 가득 (주소창/노치 대응) */
  min-height: 100svh;
  @supports (height: 100dvh) {
    min-height: 100dvh;
  }

  /* 레이아웃: 헤더/본문(스크롤)/탭 순서 */
  display: flex;
  flex-direction: column;

  /* 바깥 컨테이너는 스크롤 막고, 본문에서만 스크롤 */
  overflow: hidden;

  /* iPhone safe-area */
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
`;

export const Main = styled.main`
  flex: 1; /* 남은 높이 전부 차지 */
  min-height: 0; /* flex 자식 스크롤 깨짐 방지(중요) */
  overflow: auto; /* 여기서만 스크롤 */
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 16px 16px 24px; /* 기본 패딩 (페이지에서 조절 가능) */
`;
