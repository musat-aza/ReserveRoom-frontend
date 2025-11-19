// src/pages/Mypage/MyPage.tsx
import { useNavigate } from "react-router-dom";
import * as S from "./Mypage.styles";

export default function MyPage() {

  // TODO: 실제 데이터는 API 연동해서 넣어주면 됨
  const user = {
    studentId: "2023000273",
    name: "김*수",
    loginId: "00696753",
    email: "example@hanyang.ac.kr",
  };

  return (
    <S.Container>
      <S.Content>
        <S.InfoRow>
          <S.Label>학번</S.Label>
          <S.Value>{user.studentId}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>이름</S.Label>
          <S.Value>{user.name}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>통합로그인ID</S.Label>
          <S.Value>{user.loginId}</S.Value>
        </S.InfoRow>

        <S.InfoRow>
          <S.Label>이메일</S.Label>
          <S.Value>{user.email}</S.Value>
        </S.InfoRow>

        <S.LogoutButton>로그아웃</S.LogoutButton>
      </S.Content>
    </S.Container>
  );
}
