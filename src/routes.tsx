// src/routes/routes.tsx
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import Mypage from "@/pages/Mypage";
import BoardList from "@/pages/Board/BoardList";
import BoardDetail from "@/pages/Board/BoardDetail";
import MyBooking from "@/pages/Booking/MyBooking";
import BookingEdit from "@/pages/Booking/BookingEdit";
import SmashStatus from "@/pages/SmashRoom/SmashStatus";
import SmashReserve from "@/pages/SmashRoom/SmashReserve";
import CubeStatus from "@/pages/Cube/CubeStatus";
import CubeReserve from "@/pages/Cube/CubeReserve";

import type { ReactElement } from "react";

// ✅ 라우트 정의 타입
export type RouteMeta = {
  title?: string;         // 가운데 타이틀 텍스트
  showBack?: boolean;     // 왼쪽: 뒤로가기 버튼 표시 여부
  showMy?: boolean;       // 오른쪽: 마이페이지 버튼 표시 여부
  visible?: boolean;      // 헤더 자체를 숨길지 여부 (ex. 로그인/회원가입)
};

export type RouteDef = {
  path: string;
  element: ReactElement;
  meta?: RouteMeta;
};

// ✅ 여기 배열에 "주소 + 페이지 + 헤더설정(meta)"를 모두 모아둔다
export const routes: RouteDef[] = [
  {
    path: "/",
    element: <Home />,
    meta: { title: "홈", showBack: false, showMy: true, visible: true },
  },
  {
    path: "/login",
    element: <Login />,
    meta: { visible: false }, // 로그인 화면은 헤더 숨김
  },
  {
    path: "/signup",
    element: <Signup />,
    meta: { visible: false }, // 회원가입 화면도 헤더 숨김
  },
  {
    path: "/mypage",
    element: <Mypage />,
    meta: { title: "마이페이지", showBack: true, showMy: false, visible: true },
  },
  {
    path: "/board",
    element: <BoardList />,
    meta: { title: "게시판", showBack: true, showMy: true, visible: true },
  },
  {
    path: "/board/:id",
    element: <BoardDetail />,
    meta: { title: "게시글", showBack: true, showMy: false, visible: true },
  },
  {
    path: "/booking/mine",
    element: <MyBooking />,
    meta: { title: "내 예약", showBack: true, showMy: true, visible: true },
  },
  {
    path: "/booking/edit/:id",
    element: <BookingEdit />,
    meta: { title: "예약 변경", showBack: true, showMy: true, visible: true },
  },
  {
    path: "/smashroom/status",
    element: <SmashStatus />,
    meta: { title: "스매시룸 현황", showBack: true, showMy: true, visible: true },
  },
  {
    path: "/smashroom/reserve",
    element: <SmashReserve />,
    meta: { title: "스매시룸 예약", showBack: true, showMy: true, visible: true },
  },
  {
    path: "/cube/status",
    element: <CubeStatus />,
    meta: { title: "큐브 현황", showBack: true, showMy: true, visible: true },
  },
  {
    path: "/cube/reserve",
    element: <CubeReserve />,
    meta: { title: "큐브 예약", showBack: true, showMy: true, visible: true },
  },
];
