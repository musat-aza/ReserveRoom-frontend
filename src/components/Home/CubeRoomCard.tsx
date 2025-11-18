// components/home/cards/CubeRoomCard.tsx
import styled from "styled-components";

const MapImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 4px;
`;

export function CubeRoomCard() {
  return (
    <div>
      <MapImage src="/images/cube-map.png" alt="큐브 배치도" />
    </div>
  );
}
