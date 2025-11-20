import type { ReservationData } from "../components/Home/ReservationItem";

export interface HomeReservationResponse {
  totalCount: number;
  cubeCount: number;
  smashCount: number;
  reservations: ReservationData[];
}

export const HOME_MOCK_DATA: HomeReservationResponse = {
  totalCount: 2,
  cubeCount: 2,
  smashCount: 0,
  reservations: [
    {
      reservationId: 3,
      userId: 4,
      roomName: "큐브 3번방",
      bookerName: "김지수",
      startTime: "2025-11-20T14:00:00",
      endTime: "2025-11-20T16:00:00",
      purpose: "STUDY",
      attendeeNames: ["김무", "김이름"],
    },
    {
      reservationId: 4,
      userId: 4,
      roomName: "큐브 2번방",
      bookerName: "김지수",
      startTime: "2025-11-20T14:00:00",
      endTime: "2025-11-20T16:00:00",
      purpose: "STUDY",
      attendeeNames: [],
    },
  ],
};
