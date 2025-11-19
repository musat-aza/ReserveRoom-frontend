// src/pages/Mypage/MyPage.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export const Content = styled.div`
  padding: 1.5rem 1.25rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.9rem 0;
  border-bottom: 1px solid #eee;
`;

export const Label = styled.div`
  font-size: 0.95rem;
  color: #555;
`;

export const Value = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: #222;
`;

export const LogoutButton = styled.button`
  margin-top: 3rem;
  width: 100%;
  padding: 0.9rem;
  text-align: center;
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  color: #222;
`;
