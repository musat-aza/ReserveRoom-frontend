// components/home/cards/SmashRoomCard.tsx
import styled from "styled-components";

const MapImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 4px;
`;

export function SmashRoomCard() {
  return (
    <div>
      <MapImage src="/images/smash-map.png" alt="스매시룸 배치도" />
    </div>
  );
}
