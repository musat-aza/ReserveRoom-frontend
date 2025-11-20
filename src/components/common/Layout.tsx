// src/components/layout/Layout.tsx
import type { ReactNode } from "react";
import { LayoutContainer, Main } from "./Layout.styled";
import Header from "@/components/common/Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Header /> 
      <Main>{children}</Main>
    </LayoutContainer>
  );
}
