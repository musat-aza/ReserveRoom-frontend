import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { LayerCard } from "../components/Home/LayerCard";
import { MyReservationCard } from "../components/Home/MyReservationCard";
import { SmashRoomCard } from "../components/Home/SmashRoomCard";
import { CubeRoomCard } from "../components/Home/CubeRoomCard";
import { RecentBoardCard } from "../components/Home/BoardCard";

type CardId = "MY" | "SMASH" | "CUBE";

const CARD_TITLE = {
  MY: "내 예약",
  SMASH: "스매시룸 예약",
  CUBE: "큐브 예약",
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
        return <MyReservationCard />;
      case "SMASH":
        return <SmashRoomCard />;
      case "CUBE":
        return <CubeRoomCard />;
      default:
        return null;
    }
  };

  return (
    <Page>
      <RecentBoardCard />
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
