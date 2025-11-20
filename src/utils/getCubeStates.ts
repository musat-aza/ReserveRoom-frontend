// ✅ src/utils/cuberoom/getCubeRoomStates.ts (파일 위치/이름도 큐브로!)

import type {
  CubeRoomState,
  CubeRoomStatus,
} from "@/components/cube/CubeRoomMap";
import { MOCK_SMASH_ROOMS } from "@/Mocks/reserveStatusMock"; // 프로젝트에 맞게 상수 이름만 맞춰줘!

import type { ReservationData } from "@/components/Home/ReservationItem";

const ALL_ROOM_NAMES = [
  "큐브 1번방",
  "큐브 2번방",
  "큐브 3번방",
  "큐브 4번방",
  "큐브 5번방",
  "큐브 6번방",
  "큐브 7번방",
  "큐브 8번방",
];

// now를 인자로 받게 해두면, 나중에 테스트/디버깅에도 좋음
export function getCubeRoomStates(
  reservations: ReservationData[] = MOCK_SMASH_ROOMS,
  now: Date = new Date()
): CubeRoomState[] {
  const today = now.toISOString().slice(0, 10); // "YYYY-MM-DD"

  // 오늘 예약만
  const todaysReservations = reservations.filter((r) =>
    r.startTime.startsWith(today)
  );

  const result: CubeRoomState[] = ALL_ROOM_NAMES.map((roomName) => {
    const related = todaysReservations.filter((r) => r.roomName === roomName);

    let status: CubeRoomStatus = "AVAILABLE";

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
