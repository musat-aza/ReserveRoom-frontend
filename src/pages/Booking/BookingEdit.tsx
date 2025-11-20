import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./BookingEdit.styles";

import { DUMMY_DATA } from "../../components/Reserve/reserveDummy";
import { TIME_OPTIONS } from "../../components/Reserve/reserveDummy";

export const BookingEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // form states
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [attendees, setAttendees] = useState<string[]>([]);
  const [attendeeInput, setAttendeeInput] = useState("");

  // option states
  const [timeOptions, setTimeOptions] = useState<string[]>([]);

  // 🔥 시간 옵션 로드 — 백엔드로 대체할 예정
  useEffect(() => {
    // TODO: 백엔드 API 연결
    // const res = await fetch("/api/time-options");
    // setTimeOptions(await res.json());
    setTimeOptions(TIME_OPTIONS);
  }, []);

  // 🔥 예약 상세 정보 불러오기
  useEffect(() => {
    if (!id) return;

    const reservation = DUMMY_DATA.find(
      (item) => item.reservationId === Number(id)
    );

    if (!reservation) {
      alert("예약 정보를 찾을 수 없습니다.");
      navigate(-1);
      return;
    }

    // "2024.11.20 14:00 ~ 16:00"
    const [dateStr, start, , end] = reservation.startTime.split(" ");

    setDate(dateStr.replace(/\./g, "-"));
    setStartTime(start);
    setEndTime(end);
    setPurpose(reservation.purpose);
    setAttendees(reservation.attendeeNames?.split(", ") || []);
  }, [id, navigate]);

  const handleAddAttendee = () => {
    const trimmed = attendeeInput.trim();
    if (!trimmed) return;
    if (attendees.includes(trimmed)) {
      alert("이미 추가된 사용자입니다.");
      return;
    }
    setAttendees([...attendees, trimmed]);
    setAttendeeInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddAttendee();
    }
  };

  const removeAttendee = (index: number) => {
    setAttendees(attendees.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      reservationId: id,
      date,
      startTime,
      endTime,
      purpose,
      attendees,
    };

    console.log("PUT payload:", payload);

    // TODO: 실제 PUT 요청
    /*
    fetch(`/api/reservations/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    */

    alert("예약이 수정되었습니다.");
    navigate("/booking/mine");
  };

  return (
    <S.Container>
      <S.PageTitle>예약 수정</S.PageTitle>

      <S.Form onSubmit={handleSubmit}>
        {/* 날짜 */}
        <S.InputWrapper>
          <S.FloatingLabel>예약일자 *</S.FloatingLabel>
          <S.StyledInput
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </S.InputWrapper>

        {/* 시작 시간 */}
        <S.InputWrapper>
          <S.FloatingLabel>예약 시작시간 *</S.FloatingLabel>
          <S.StyledSelect
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          >
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </S.StyledSelect>
        </S.InputWrapper>

        {/* 종료 시간 */}
        <S.InputWrapper>
          <S.FloatingLabel>예약 종료시간 *</S.FloatingLabel>
          <S.StyledSelect
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          >
            {timeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </S.StyledSelect>
        </S.InputWrapper>

        {/* 용도 */}
        <S.InputWrapper>
          <S.FloatingLabel>용도 *</S.FloatingLabel>
          <S.StyledSelect
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          >
            <option value="회의">회의</option>
            <option value="학습">학습</option>
            <option value="동아리활동">동아리활동</option>
            <option value="개인 모각코">개인 모각코</option>
          </S.StyledSelect>
        </S.InputWrapper>

        {/* 동반자 */}
        <S.InputWrapper>
          <S.FloatingLabel>동반 이용자</S.FloatingLabel>

          <S.ChipContainer>
            {attendees.map((p, idx) => (
              <S.Chip key={idx}>
                {p}
                <S.ChipDelete onClick={() => removeAttendee(idx)}>
                  x
                </S.ChipDelete>
              </S.Chip>
            ))}

            <S.StyledInput
              type="text"
              placeholder="학번 또는 이름 입력"
              value={attendeeInput}
              onChange={(e) => setAttendeeInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </S.ChipContainer>

          <S.AddUserIcon onClick={handleAddAttendee}>+</S.AddUserIcon>
        </S.InputWrapper>

        {/* 버튼 */}
        <S.ButtonGroup>
          <S.CancelButton type="button" onClick={() => navigate(-1)}>
            취소
          </S.CancelButton>
          <S.SubmitButton type="submit">변경 저장</S.SubmitButton>
        </S.ButtonGroup>
      </S.Form>
    </S.Container>
  );
};

export default BookingEdit;
