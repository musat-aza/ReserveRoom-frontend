// src/utils/smashroom/getSmashRoomStates.ts
import type {
  SmashRoomState,
  SmashRoomStatus,
} from "@/components/smashroom/SmashRoomMap";
import { MOCK_SMASH_ROOMS } from "@/Mocks/reserveStatusMock";

import type { ReservationData } from "@/components/Home/ReservationItem";

const ALL_ROOM_NAMES = [
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

// now를 인자로 받게 해두면, 나중에 테스트/디버깅에도 좋음
export function getSmashRoomStates(
  reservations: ReservationData[] = MOCK_SMASH_ROOMS,
  now: Date = new Date()
): SmashRoomState[] {
  const today = now.toISOString().slice(0, 10); // "YYYY-MM-DD"

  // 오늘 예약만
  const todaysReservations = reservations.filter((r) =>
    r.startTime.startsWith(today)
  );

  const result: SmashRoomState[] = ALL_ROOM_NAMES.map((roomName) => {
    const related = todaysReservations.filter((r) => r.roomName === roomName);

    let status: SmashRoomStatus = "AVAILABLE";

    // 1) 지금 시간에 겹치는 예약이 있으면 → IN_USE
    const inUse = related.some((r) => {
      const start = new Date(r.startTime);
      const end = new Date(r.endTime);

      return start <= now && now < end;
    });

    if (inUse) {
      status = "IN_USE";
    } else {
      // 2) 지금 이후 시작하는 예약이 있으면 → RESERVED
      const hasFuture = related.some((r) => new Date(r.startTime) > now);
      if (hasFuture) status = "RESERVED";
      // 3) 둘 다 없으면 → AVAILABLE 그대로
    }
    return { roomName, status };
  });
  return result;
}
