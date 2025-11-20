import styled from "styled-components";

export interface ReservationData {
  reservationId: number;
  userId: number;
  roomName: string;
  bookerName: string;
  startTime: string;
  endTime: string;
  purpose: string;
  attendeeNames: string[];
}

interface Props {
  data: ReservationData;
}

const ItemContainer = styled.div`
  padding: 16px 0; /* 위아래 여백 */
  border-bottom: 1px solid #eee; /* 구분선 */
  display: flex;
  flex-direction: column;
  gap: 5px; /* 줄 간격 */

  &:last-child {
    border-bottom: none;
  }
`;

const RoomName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const InfoText = styled.div`
  font-size: 14px;
  color: #666; /* 살짝 연한 회색 */
`;

const formatTime = (start: string, end: string) => {
  const startDate = start.split("T")[0];
  const startTime = start.split("T")[1].slice(0, 5);
  const endTime = end.split("T")[1].slice(0, 5);

  return `${startDate} ${startTime} ~ ${endTime}`;
};

export function ReservationItem({ data }: Props) {
  return (
    <ItemContainer>
      <RoomName>{data.roomName}</RoomName>

      <InfoText>{formatTime(data.startTime, data.endTime)}</InfoText>

      <InfoText>동반자 {data.attendeeNames.length}명</InfoText>
    </ItemContainer>
  );
}
