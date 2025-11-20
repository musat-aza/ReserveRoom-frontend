// src/components/Home/CubeRoomCard.tsx
import styled from "styled-components";
import { CubeRoomMap } from "@/components/cube/CubeRoomMap";
import type { CubeRoomState } from "@/components/cube/CubeRoomMap";

interface CubeRoomCardProps {
  rooms: CubeRoomState[]; // 8개 방 상태
}

export function CubeRoomCard({ rooms }: CubeRoomCardProps) {
  return (
    <CardWrapper>
      <CubeRoomMap rooms={rooms} />
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
`;
