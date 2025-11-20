import styled from "styled-components";

export default function SignupPage() {
  return (
    <Wrapper>
      <Card>
        <Title>회원가입</Title>

        <Field>
          <Label>
            이름 <span>*</span>
          </Label>
          <Input type="text" placeholder="이름을 입력해주세요." />
        </Field>

        <Field>
          <Label>
            이메일 주소 <span>*</span>
          </Label>
          <Input type="email" placeholder="id@example.com" />
        </Field>

        <Field>
          <Label>
            비밀번호 <span>*</span>
          </Label>
          <Input type="password" placeholder="비밀번호" />
        </Field>

        <Field>
          <Label>
            비밀번호 확인 <span>*</span>
          </Label>
          <Input type="password" placeholder="비밀번호 확인" />
        </Field>

        <TermsTitle>약관 동의</TermsTitle>

        <TermsBox>
          <TermRowAll>
            <input type="checkbox" id="all" />
            <label htmlFor="all">전체 약관 동의</label>
          </TermRowAll>

          <Divider />

          <TermRow>
            <input type="checkbox" id="terms1" />
            <label htmlFor="terms1">회원가입 및 운영약관 동의 (필수)</label>
          </TermRow>

          <TermRow>
            <input type="checkbox" id="terms2" />
            <label htmlFor="terms2">개인정보 수집 및 이용 동의 (필수)</label>
          </TermRow>

          <TermRow>
            <input type="checkbox" id="terms3" />
            <label htmlFor="terms3">마케팅 정보 수신 동의 (선택)</label>
          </TermRow>
        </TermsBox>

        <SubmitButton>회원가입 완료</SubmitButton>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f6f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 420px;
  padding: 32px 28px 36px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e3e5e8;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Field = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 13px;
  margin-bottom: 6px;
  color: #555;

  span {
    color: #ff4d4f;
    margin-left: 2px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #d4d7dc;
  font-size: 14px;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #1e5bdb;
    background: #ffffff;
  }

  &::placeholder {
    color: #b0b5bd;
  }
`;

const TermsTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #444;
`;

const TermsBox = styled.div`
  border: 1px solid #e3e5e8;
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 20px;
  background: #fafafa;
`;

const TermRowBase = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 16px;
    height: 16px;
  }

  label {
    font-size: 13px;
    color: #555;
    cursor: pointer;
  }
`;

const TermRowAll = styled(TermRowBase)`
  label {
    font-weight: 600;
  }
`;

const TermRow = styled(TermRowBase)`
  margin-top: 8px;
`;

const Divider = styled.div`
  margin: 8px 0;
  height: 1px;
  background: #e3e5e8;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 4px;
  border-radius: 6px;
  border: none;
  background: #1e5bdb;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
