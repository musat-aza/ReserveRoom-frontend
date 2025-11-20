// src/components/Reserve/cuberoom/CubeRoomMap.tsx
import styled from "styled-components";

export type CubeRoomStatus = "AVAILABLE" | "IN_USE" | "RESERVED";

export interface CubeRoomState {
  roomName: string; // "큐브 1번방" ...
  status: CubeRoomStatus;
}

interface CubeRoomMapProps {
  rooms: CubeRoomState[]; // 8개 방 상태
}

const ROOM_LAYOUT = [
  // 위쪽 4개
  { roomName: "큐브 3번방", row: 1, col: 1 },
  { roomName: "큐브 4번방", row: 1, col: 2 },
  { roomName: "큐브 5번방", row: 1, col: 3 },
  { roomName: "큐브 6번방", row: 1, col: 4 },

  // 왼쪽 세로 2개
  { roomName: "큐브 2번방", row: 2, col: 1 },
  { roomName: "큐브 1번방", row: 3, col: 1 },

  // 오른쪽 세로 2개
  { roomName: "큐브 7번방", row: 2, col: 4 },
  { roomName: "큐브 8번방", row: 3, col: 4 },
];

export function CubeRoomMap({ rooms }: CubeRoomMapProps) {
  const statusMap = new Map(rooms.map((r) => [r.roomName, r.status] as const));

  return (
    <Wrapper>
      {/* 방들 */}
      {ROOM_LAYOUT.map((slot) => {
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

      {/* 가운데 805 영역 */}
      <CenterArea
        $rowStart={2}
        $rowEnd={4}
        $colStart={2}
        $colEnd={3}
      ></CenterArea>
    </Wrapper>
  );
}

/* ============ styled ============ */

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 395px;
  aspect-ratio: 0.7 / 1;

  border-radius: 16px;
  background-color: #f5f5f7;
  border: 1px solid #e1e1e6;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 4px;

  padding: 6px 8px;
  box-sizing: border-box;
`;

const RoomCell = styled.div<{
  $row: number;
  $col: number;
  $status: CubeRoomStatus;
}>`
  grid-row: ${({ $row }) => $row};
  grid-column: ${({ $col }) => $col};

  border-radius: 6px;
  border: 1px solid #d0d0d5;
  background-color: ${({ $status }) =>
    $status === "IN_USE"
      ? "rgba(255, 99, 132, 0.7)" // 사용 중
      : $status === "RESERVED"
      ? "rgba(255, 206, 86, 0.7)" // 예약됨
      : "rgba(255, 255, 255, 0.9)"}; // 사용 가능

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 500;
  color: #555;
`;

const CenterArea = styled.div<{
  $rowStart: number;
  $rowEnd: number;
  $colStart: number;
  $colEnd: number;
}>`
  grid-row: ${({ $rowStart, $rowEnd }) => `${$rowStart} / ${$rowEnd + 1}`};
  grid-column: ${({ $colStart, $colEnd }) => `${$colStart} / ${$colEnd + 1}`};

  border-radius: 12px;
  background-color: #dcdde5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #333;
`;
