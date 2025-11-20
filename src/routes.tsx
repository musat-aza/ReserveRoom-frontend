// src/routes/routes.tsx
import Home from "@/pages/Home";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import MyPage from "@/pages/Mypage/Mypage";
import BoardList from "@/pages/Board/BoardList";
import BoardDetail from "@/pages/Board/BoardDetail";
import MyBooking from "@/pages/Booking/MyBooking";
import BookingEdit from "@/pages/Booking/BookingEdit";
import SmashStatus from "@/pages/SmashRoom/SmashStatus";
import SmashReserve from "@/pages/SmashRoom/SmashReserve";
import CubeStatus from "@/pages/Cube/CubeStatus";
import CubeReserve from "@/pages/Cube/CubeReserve";
import Logout from "@/pages/Auth/Logout";
import type { ReactElement } from "react";

export type RouteMeta = {
  title?: string;
  showBack?: boolean;
  showMy?: boolean;
  visible?: boolean;
};

export type RouteDef = {
  path: string;
  element: ReactElement;
  meta?: RouteMeta;
};

export const routes: RouteDef[] = [
  {
    path: "/home",
    element: <Home />,
    meta: { title: "홈", showBack: false, showMy: true, visible: true },
  },
  {
    path: "/",
    element: <Login />,
    meta: { visible: false },
  },
  {
    path: "/logout",
    element: <Logout />,
    meta: { visible: false },
  },
  {
    path: "/signup",
    element: <Signup />,
    meta: { visible: false },
  },
  {
    path: "/mypage",
    element: <MyPage />,
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
    meta: {
      title: "스매시룸 현황",
      showBack: true,
      showMy: true,
      visible: true,
    },
  },
  {
    path: "/smashroom/reserve",
    element: <SmashReserve />,
    meta: {
      title: "스매시룸 예약",
      showBack: true,
      showMy: true,
      visible: true,
    },
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
