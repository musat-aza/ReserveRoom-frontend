import type { Post } from "../components/Home/BoardCard";

export const MOCK_BOARD_POSTS: Post[] = [
  {
    postId: 1,
    username: "김무사트",
    title: "지갑 분실했습니다 ㅠㅠ 찾아주세요",
    content: "3번방에 검은색 지갑 두고 온 것 같아요. 보신 분 연락 좀...",
    roomtype: "CUBE",
    postCategory: "LOST",
    createdAt: "2025-11-19T20:00:00",
    photoUrl: "...",
  },
  {
    postId: 2,
    username: "관리자",
    title: "스매시룸 이용 수칙 공지",
    content: "깨끗하게 사용 부탁드립니다.",
    roomtype: "SMASH",
    postCategory: "NOTICE",
    createdAt: "2025-11-14T09:00:00", // 이게 더 최신 날짜
    photoUrl: "...",
  },
  {
    postId: 3,
    username: "이영희",
    title: "같이 스터디 하실 분?",
    content: "큐브 2번방에서 2시간 정도 같이 하실 분 구해요.",
    roomtype: "CUBE",
    postCategory: "GENERAL",
    createdAt: "2025-11-17T14:00:00",
    photoUrl: "",
  },
];
