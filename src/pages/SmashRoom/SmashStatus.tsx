// src/pages/smashroom/SmashStatus.tsx

import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { DateFilter } from "@/components/Status/DateFilter";
import { StatusLegend } from "@/components/Status/StatusLegend";
import { RoomList } from "@/components/Status/RoomList";
import { MOCK_SMASH_ROOMS } from "@/Mocks/reserveStatusMock";

export default function SmashStatus() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("2025-11-20");

  const handleChangeDate = (value: string) => {
    setSelectedDate(value);
  };

  // ✅ 오늘 날짜 기준 예약 필터링
  const todaysReservations = MOCK_SMASH_ROOMS.filter((r) =>
    r.startTime.startsWith(selectedDate)
  );

  // ✅ 스매시룸 14개 전체 목록 (실제 백엔드 roomName에 맞게 수정하면 됨)
  const SMASH_ROOM_NAMES = [
    "스매시 1번방",
    "스매시 2번방",
    "스매시 3번방",
    "스매시 4번방",
    "스매시 5번방",
    "스매시 6번방",
    "스매시 7번방",
    "스매시 8번방",
    "스매시 9번방",
    "스매시 10번방",
    "스매시 11번방",
    "스매시 12번방",
    "스매시 13번방",
    "스매시 14번방",
  ];

  const handleReserve = (roomName: string) => {
    // roomName / date를 쿼리로 넘기고 싶으면 여기서 처리하면 됨
    navigate("/smashroom/reserve");
  };

  return (
    <Page>
      <Content>
        <DateFilter value={selectedDate} onChange={handleChangeDate} />
        <StatusLegend />
        <RoomList
          reservations={todaysReservations}
          roomNames={SMASH_ROOM_NAMES}
          onReserve={handleReserve}
        />
      </Content>
    </Page>
  );
}

/* ---------- styled ---------- */

const Page = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const Content = styled.main`
  padding: 0 16px 24px;
`;
