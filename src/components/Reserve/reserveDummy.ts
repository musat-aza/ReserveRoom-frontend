export interface Reservation {
  reservationId: number;
  roomName: string;
  bookerName: string;
  startTime: string;
  purpose: string;
  attendeeNames?: string;
}

export const DUMMY_DATA: Reservation[] = [
  {
    reservationId: 1,
    roomName: "스매시룸 A",
    bookerName: "김철수",
    startTime: "2024.11.20 14:00 ~ 16:00",
    purpose: "캡스톤 디자인 팀 회의",
    attendeeNames: "이영희, 박민수",
  },
  {
    reservationId: 2,
    roomName: "큐브 3번",
    bookerName: "김철수",
    startTime: "2024.11.21 10:00 ~ 12:00",
    purpose: "개인 모각코",
  },
  {
    reservationId: 3,
    roomName: "스매시룸 B",
    bookerName: "김철수",
    startTime: "2024.11.22 15:00 ~ 17:00",
    purpose: "동아리 운영진 회의",
    attendeeNames: "최유진, 강다니엘, 송민호",
  },
  {
    reservationId: 4,
    roomName: "큐브 1번",
    bookerName: "김철수",
    startTime: "2024.11.23 09:00 ~ 11:00",
    purpose: "면접 준비 스터디",
    attendeeNames: "정수정",
  },
];

export const TIME_OPTIONS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

