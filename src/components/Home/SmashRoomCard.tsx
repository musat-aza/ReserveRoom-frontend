// src/components/Home/SmashRoomCard.tsx
import styled from "styled-components";
import { SmashRoomMap } from "@/components/smashroom/SmashRoomMap";
import type { SmashRoomState } from "@/components/smashroom/SmashRoomMap";

interface SmashRoomCardProps {
  rooms: SmashRoomState[]; // 14개 방 상태
}

export function SmashRoomCard({ rooms }: SmashRoomCardProps) {
  return (
    <CardWrapper>
      <SmashRoomMap rooms={rooms} />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
`;
