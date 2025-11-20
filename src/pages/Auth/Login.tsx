import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 검증 로직 넣을 자리
    navigate("/home"); // 홈페이지로 이동
  };
  return (
    <Wrapper>
      <Card>
        <Title>로그인</Title>

        <InputBox>
          <label>이메일</label>
          <input type="email" />
        </InputBox>

        <InputBox>
          <label>비밀번호</label>
          <input type="password" />
        </InputBox>

        <PrimaryButton onClick={handleLogin}>로그인</PrimaryButton>
        <BottomText>
          아직 계정이 없나요? <a href="/signup">회원가입</a>
        </BottomText>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  background: #f5f6f7;
`;

const Card = styled.div`
  width: 360px;
  margin-top: 80px;
  padding: 28px 24px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #e3e5e8;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    font-size: 13px;
    margin-bottom: 4px;
    color: #555;
  }

  input {
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #d4d7dc;
    font-size: 14px;
    background: #fafafa;
  }

  input:focus {
    border-color: #1e5bdb;
    outline: none;
    background: #fff;
  }
`;

const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  background: #1e5bdb;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin-top: 6px;
  cursor: pointer;
`;

const BottomText = styled.div`
  margin-top: 18px;
  font-size: 13px;
  text-align: center;
  color: #6b7280;

  a {
    color: #4a79ff;
  }
`;
