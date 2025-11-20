// src/components/smashroom/StatusLegend.tsx

import styled from "styled-components";
import type { SmashRoomStatus } from "./RoomItem";

export function StatusLegend() {
  return (
    <Wrapper>
      <Item>
        <ColorBox status="IN_USE" />
        <span>이용중</span>
      </Item>
      <Item>
        <ColorBox status="RESERVED" />
        <span>예약중</span>
      </Item>
      <Item>
        <ColorBox status="AVAILABLE" />
        <span>이용가능</span>
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  gap: 16px;
  align-items: center;
  margin: 16px 0 8px;
  font-size: 12px;
  color: #4b5563;
`;

const Item = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const ColorBox = styled.span<{ status: SmashRoomStatus }>`
  width: 14px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ status }) => {
    switch (status) {
      case "IN_USE":
        return "#4b5563";
      case "RESERVED":
        return "#9ca3af";
      case "AVAILABLE":
      default:
        return "#3b82f6";
    }
  }};
`;
