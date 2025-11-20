import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div<{ background: string }>`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #003b8e;
  margin-bottom: 24px;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
`;

export const LinkButton = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Separator = styled.span`
  color: #666;
`;
