import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { LayerCard } from "../components/Home/LayerCard";
import { MyReservationCard } from "../components/Home/MyReservationCard";
import { SmashRoomCard } from "../components/Home/SmashRoomCard";
import { CubeRoomCard } from "../components/Home/CubeRoomCard";
import { RecentBoardCard } from "../components/Home/BoardCard";

import { MOCK_BOARD_POSTS } from "../Mocks/boardMockData";
import { HOME_MOCK_DATA } from "../Mocks/homeMockData";

import { getSmashRoomStates } from "@/utils/getSmashRoomStates";
import { getCubeRoomStates } from "@/utils/getCubeStates";

import type { Post } from "../components/Home/BoardCard";
import type { ReservationData } from "../components/Home/ReservationItem";

type CardId = "MY" | "SMASH" | "CUBE";

const CARD_TITLE = {
  MY: "내 예약",
  SMASH: "스매시룸 현황",
  CUBE: "큐브 현황",
} as const;

const Page = styled.main`
  padding: 40px 20px 100px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 100vh;
  /* 모바일 화면 중앙 정렬 s느낌 */
  align-items: center;
`;

const CardStack = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  width: 100%;
`;

export default function Home() {
  const nav = useNavigate();
  const [order, setOrder] = useState<CardId[]>(["CUBE", "MY", "SMASH"]);

  const { reservations } = HOME_MOCK_DATA as {
    reservations: ReservationData[];
  };

  const smashRooms = getSmashRoomStates();
  const cubeRooms = getCubeRoomStates();

  const getLatestPost = (): Post | null => {
    if (!MOCK_BOARD_POSTS || MOCK_BOARD_POSTS.length === 0) return null;

    return [...MOCK_BOARD_POSTS].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )[0];
  };

  const latestPostData = getLatestPost();

  const handleClickCard = (id: CardId) => {
    if (order[order.length - 1] === id) return;
    setOrder((prev) => [...prev.filter((c) => c !== id), id]);
  };

  const handleMoreClick = (id: CardId) => {
    switch (id) {
      case "MY":
        nav("/booking/mine");
        break;
      case "SMASH":
        nav("/smashroom/status");
        break;
      case "CUBE":
        nav("/cube/status");
        break;
    }
  };

  const renderCardContent = (id: CardId) => {
    switch (id) {
      case "MY":
        return <MyReservationCard reservations={reservations} />;
      case "SMASH":
        return <SmashRoomCard rooms={smashRooms} />;
      case "CUBE":
        return <CubeRoomCard rooms={cubeRooms} />;
      default:
        return null;
    }
  };

  return (
    <Page>
      <RecentBoardCard latestPost={latestPostData} />
      <CardStack>
        {order.map((id, index) => (
          <LayerCard
            key={id}
            depth={index}
            title={CARD_TITLE[id]}
            onClick={() => handleClickCard(id)}
            onMoreClick={() => handleMoreClick(id)}
          >
            {renderCardContent(id)}
          </LayerCard>
        ))}
      </CardStack>
    </Page>
  );
}
