// src/components/layout/Layout.tsx
import type { ReactNode } from "react";
import { LayoutContainer, Main } from "./Layout.styled";
import Header from "@/components/common/Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Header />        {/* 공통 헤더: meta에 따라 자동 표시/숨김 */}
      <Main>{children}</Main>  {/* 본문만 스크롤 */}
    </LayoutContainer>
  );
}
