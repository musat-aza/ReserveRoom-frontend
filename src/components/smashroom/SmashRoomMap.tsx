// src/components/Reserve/smashroom/SmashRoomMap.tsx
import styled from "styled-components";

export type SmashRoomStatus = "AVAILABLE" | "IN_USE" | "RESERVED";

export interface SmashRoomState {
  roomName: string; // "스매시 1번방" ...
  status: SmashRoomStatus; // 현재 상태
}

interface SmashRoomMapProps {
  rooms: SmashRoomState[]; // 14개 방 상태
}

/**
 * 3열 × 10행 그리드에 각 방을 배치하는 레이아웃
 * - col 1: 왼쪽 6개 방
 * - col 2: 복도 / 입구
 * - col 3: 오른쪽 1 + 5 + 2 방
 */
const ROOM_LAYOUT = [
  // 왼쪽 6개 (위에서부터 차곡차곡)
  { roomName: "스매시 1번방", row: 3, col: 1 },
  { roomName: "스매시 2번방", row: 4, col: 1 },
  { roomName: "스매시 3번방", row: 5, col: 1 },
  { roomName: "스매시 4번방", row: 6, col: 1 },
  { roomName: "스매시 5번방", row: 7, col: 1 },
  { roomName: "스매시 6번방", row: 8, col: 1 },

  // 오른쪽 위 1개
  { roomName: "스매시 7번방", row: 1, col: 3 },

  // 오른쪽 중간 5개
  { roomName: "스매시 8번방", row: 3, col: 3 },
  { roomName: "스매시 9번방", row: 4, col: 3 },
  { roomName: "스매시 10번방", row: 5, col: 3 },
  { roomName: "스매시 11번방", row: 6, col: 3 },
  { roomName: "스매시 12번방", row: 7, col: 3 },

  // 오른쪽 아래 2개
  { roomName: "스매시 13번방", row: 9, col: 3 },
  { roomName: "스매시 14번방", row: 10, col: 3 },
];

export function SmashRoomMap({ rooms }: SmashRoomMapProps) {
  const statusMap = new Map(rooms.map((r) => [r.roomName, r.status] as const));

  return (
    <Wrapper>
      {/* 방들 */}
      {ROOM_LAYOUT.map((slot) => {
        // "스매시 1번방" → "1번"
        const numMatch = slot.roomName.match(/\d+/);
        const label = numMatch ? `${numMatch[0]}번` : "";

        return (
          <RoomCell
            key={slot.roomName}
            $row={slot.row}
            $col={slot.col}
            $status={statusMap.get(slot.roomName) ?? "AVAILABLE"}
          >
            {label}
          </RoomCell>
        );
      })}

      {/* 복도 / 입구 데코 */}
      <Corridor $rowStart={1} $rowEnd={10} $col={2} />
      <Entrance $row={2} $col={3}>
        입구
      </Entrance>
      <Entrance $row={8} $col={3}>
        입구
      </Entrance>
    </Wrapper>
  );
}

/* ============ styled ============ */

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 395px;
  aspect-ratio: 1 / 1.4;

  border-radius: 16px;
  background-color: #f5f5f7;
  border: 1px solid #e1e1e6;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1.2fr 0.4fr 1.2fr;
  grid-template-rows: repeat(10, 1fr);
  gap: 4px;

  /* 🔽 안쪽 여백도 살짝만 */
  padding: 6px 8px;
  box-sizing: border-box;
`;

const RoomCell = styled.div<{
  $row: number;
  $col: number;
  $status: SmashRoomStatus;
}>`
  grid-row: ${({ $row }) => $row};
  grid-column: ${({ $col }) => $col};

  border-radius: 6px;
  border: 1px solid #d0d0d5;
  background-color: ${({ $status }) =>
    $status === "IN_USE"
      ? "rgba(255, 99, 132, 0.7)" // 사용 중
      : $status === "RESERVED"
      ? "rgba(255, 206, 86, 0.7)" // 예약
      : "rgba(255, 255, 255, 0.9)"}; // 사용 가능

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  color: #555;
`;

const Corridor = styled.div<{
  $rowStart: number;
  $rowEnd: number;
  $col: number;
}>`
  grid-row: ${({ $rowStart, $rowEnd }) => `${$rowStart} / ${$rowEnd + 1}`};
  grid-column: ${({ $col }) => $col};
  border-radius: 6px;
  background-color: #e3e4ea;
`;

const Entrance = styled.div<{ $row: number; $col: number }>`
  grid-row: ${({ $row }) => $row};
  grid-column: ${({ $col }) => $col};
  border-radius: 6px;
  border: 1px dashed #b9bac3;
  background-color: #f0f1f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #555;
`;
