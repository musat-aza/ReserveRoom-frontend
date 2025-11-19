import * as S from "./Logout.styles"
import Background from "@/assets/back_ground.svg";  // 큰 사자 배경 (첫 번째 이미지)

export default function Logout() {
  return (
    <S.Container background={Background}>
      <S.CenterBox>
        <S.ButtonRow>
          <S.LinkButton to="/login">로그인</S.LinkButton>
          <S.Separator>|</S.Separator>
          <S.LinkButton to="/signup">회원가입</S.LinkButton>
        </S.ButtonRow>
      </S.CenterBox>
    </S.Container>
  );
}
