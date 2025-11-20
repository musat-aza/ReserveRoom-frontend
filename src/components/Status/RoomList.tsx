// src/components/smashroom/RoomList.tsx

import type { SmashReservation } from "./RoomItem";
import { RoomItem } from "./RoomItem";

interface RoomListProps {
  reservations: SmashReservation[]; // 현재 날짜 기준 필터된 전체 예약
  roomNames: string[]; // 전체 스매시룸 목록 (14개)
  onReserve: (roomName: string) => void;
}

export function RoomList({
  reservations,
  roomNames,
  onReserve,
}: RoomListProps) {
  return (
    <div>
      {roomNames.map((name, idx) => {
        const roomReservations = reservations.filter(
          (r) => r.roomName === name
        );

        return (
          <RoomItem
            key={name}
            order={idx + 1}
            roomName={name}
            reservations={roomReservations} // 없으면 [] → 전부 AVAILABLE
            onReserve={onReserve}
          />
        );
      })}
    </div>
  );
}
