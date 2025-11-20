// src/components/smashroom/RoomItem.tsx

import styled from "styled-components";

export type SmashRoomStatus = "IN_USE" | "RESERVED" | "AVAILABLE";

// 목업/백엔드에서 내려오는 예약 데이터 형태
export interface SmashReservation {
  reservationId: number;
  userId: number;
  roomName: string;
  bookerName: string;
  startTime: string; // "2025-11-20T14:00:00"
  endTime: string; // "2025-11-20T16:00:00"
  purpose: string;
  attendeeNames: string[];
}

interface RoomItemProps {
  order: number;
  roomName: string;
  reservations: SmashReservation[]; // 이 방(roomName)에 해당하는 예약들
  onReserve: (roomName: string) => void;
}

// 09 ~ 24시
const HOURS = Array.from({ length: 16 }, (_, i) => 9 + i);

export function RoomItem({
  order,
  roomName,
  reservations,
  onReserve,
}: RoomItemProps) {
  // 1️⃣ 기본: 9~24 전부 AVAILABLE
  const slots = HOURS.map((hour) => ({
    time: hour,
    status: "AVAILABLE" as SmashRoomStatus,
  }));

  // 2️⃣ 예약된 시간대는 RESERVED로 덮어쓰기
  reservations.forEach((res) => {
    const startHour = new Date(res.startTime).getHours();
    const endHour = new Date(res.endTime).getHours();

    for (let h = startHour; h < endHour; h++) {
      const idx = HOURS.indexOf(h);
      if (idx !== -1) {
        slots[idx].status = "RESERVED";
      }
    }
  });

  return (
    <Card>
      <HeaderRow>
        <Index>{order}</Index>
        <Info>
          <Name>{roomName}</Name>
          {/* 층수/수용 인원은 아직 백엔드에 없으니 임시 값 */}
          <Meta>4층 · 2 ~ 8명</Meta>
        </Info>
        <ReserveButton type="button" onClick={() => onReserve(roomName)}>
          예약
        </ReserveButton>
      </HeaderRow>

      {/* 시간 눈금 */}
      <TimeScaleRow>
        {HOURS.map((h) => (
          <TimeLabel key={h}>{h === 24 ? 0 : h}</TimeLabel>
        ))}
      </TimeScaleRow>

      {/* 시간 막대 */}
      <TimeBar>
        {slots.map((slot) => (
          <TimeBlock
            key={slot.time}
            status={slot.status}
            title={`${slot.time === 24 ? 0 : slot.time}시`}
          />
        ))}
      </TimeBar>
    </Card>
  );
}

/* ---------- styled ---------- */

const Card = styled.article`
  padding: 12px 10px 14px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Index = styled.span`
  width: 20px;
  font-size: 13px;
  color: #9ca3af;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const Meta = styled.div`
  margin-top: 2px;
  font-size: 12px;
  color: #6b7280;
`;

const ReserveButton = styled.button`
  padding: 6px 14px;
  border-radius: 999px;
  border: 1px solid #2563eb;
  background-color: #ffffff;
  color: #2563eb;
  font-size: 13px;
  font-weight: 500;
`;

const TimeScaleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 4px 2px;
`;

const TimeLabel = styled.span`
  flex: 1;
  text-align: center;
  font-size: 9px;
  color: #9ca3af;
`;

const TimeBar = styled.div`
  display: flex;
  gap: 2px;
  padding: 0 4px;
  margin-top: 2px;
`;

const TimeBlock = styled.div<{ status: SmashRoomStatus }>`
  flex: 1;
  height: 10px;
  border-radius: 2px;
  background-color: ${({ status }) => {
    switch (status) {
      case "IN_USE":
        return "#4b5563";
      case "RESERVED":
        return "#9ca3af";
      case "AVAILABLE":
      default:
        return "#3b82f6";
    }
  }};
`;
