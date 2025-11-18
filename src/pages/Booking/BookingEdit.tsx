import React, { useState, useEffect } from "react";
import * as S from "./BookingEdit.styles";
import { useNavigate } from "react-router-dom";
// import { UserPlus, X } from "lucide-react"; // 아이콘이 없으면 텍스트로 대체

interface ReserveFormProps {
  initialData?: {
    date: string;
    startTime: string;
    endTime: string;
    purpose: string;
    attendees: string[];
  };
  isEditMode?: boolean;
  onSubmit: (data: any) => void;
}

export const ReserveForm = ({ initialData, isEditMode = false, onSubmit }: ReserveFormProps) => {
  const navigate = useNavigate();

  const [date, setDate] = useState("2024-11-20");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("12:00");
  const [purpose, setPurpose] = useState("회의");
  const [attendees, setAttendees] = useState<string[]>([]);
  const [attendeeInput, setAttendeeInput] = useState("");

  // 수정 모드일 경우 초기 데이터 세팅
  useEffect(() => {
    if (initialData) {
      setDate(initialData.date);
      setStartTime(initialData.startTime);
      setEndTime(initialData.endTime);
      setPurpose(initialData.purpose);
      setAttendees(initialData.attendees);
    }
  }, [initialData]);

  // 동반자 추가
  const handleAddAttendee = () => {
    if (attendeeInput.trim() === "") return;
    if (attendees.includes(attendeeInput.trim())) {
      alert("이미 추가된 사용자입니다.");
      return;
    }
    setAttendees([...attendees, attendeeInput.trim()]);
    setAttendeeInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddAttendee();
    }
  };

  const removeAttendee = (indexToRemove: number) => {
    setAttendees(attendees.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ date, startTime, endTime, purpose, attendees });
  };

  return (
    <S.Container>
      <S.PageTitle>{isEditMode ? "예약 수정" : "예약 하기"}</S.PageTitle>
      
      <S.Form onSubmit={handleSubmit}>
        {/* 1. 예약일자 */}
        <S.InputWrapper>
          <S.FloatingLabel>예약일자 <S.RequiredMark>*</S.RequiredMark></S.FloatingLabel>
          <S.StyledInput 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </S.InputWrapper>

        {/* 2. 시간 선택 */}
        <S.InputWrapper>
          <S.FloatingLabel>예약시작시간 <S.RequiredMark>*</S.RequiredMark></S.FloatingLabel>
          <S.StyledSelect value={startTime} onChange={(e) => setStartTime(e.target.value)}>
            <option value="10:00">10:00</option>
            <option value="14:00">14:00</option>
            <option value="21:00">21:00</option>
          </S.StyledSelect>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.FloatingLabel>예약종료시간 <S.RequiredMark>*</S.RequiredMark></S.FloatingLabel>
          <S.StyledSelect value={endTime} onChange={(e) => setEndTime(e.target.value)}>
            <option value="12:00">12:00</option>
            <option value="16:00">16:00</option>
            <option value="22:00">22:00</option>
          </S.StyledSelect>
        </S.InputWrapper>

        {/* 3. 용도 */}
        <S.InputWrapper>
          <S.FloatingLabel>용도 <S.RequiredMark>*</S.RequiredMark></S.FloatingLabel>
          <S.StyledSelect value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option value="회의">회의</option>
            <option value="학습">학습</option>
            <option value="동아리활동">동아리활동</option>
            <option value="개인 모각코">개인 모각코</option>
          </S.StyledSelect>
        </S.InputWrapper>

        {/* 4. 동반 이용자 */}
        <S.InputWrapper>
          <S.FloatingLabel>동반 이용자</S.FloatingLabel>
          <S.ChipContainer>
            {attendees.map((person, index) => (
              <S.Chip key={index}>
                {person}
                <S.ChipDelete type="button" onClick={() => removeAttendee(index)}>x</S.ChipDelete>
              </S.Chip>
            ))}
            <S.StyledInput
              type="text"
              placeholder={attendees.length === 0 ? "학번 또는 이름 입력" : ""}
              value={attendeeInput}
              onChange={(e) => setAttendeeInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.ChipContainer>
          <S.AddUserIcon onClick={handleAddAttendee}>+</S.AddUserIcon>
        </S.InputWrapper>

        {/* 버튼 영역 */}
        <S.ButtonGroup>
          <S.CancelButton type="button" onClick={() => navigate(-1)}>
            취소
          </S.CancelButton>
          <S.SubmitButton type="submit">
            {isEditMode ? "변경 저장" : "예약 신청"}
          </S.SubmitButton>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
};

export default ReserveForm;