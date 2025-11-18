import styled from "styled-components";

// 1. 아까 만든 아이템 컴포넌트와 데이터 가져오기
import { ReservationItem } from "./ReservationItem";
import { HOME_MOCK_DATA } from "../../Mocks/homeMockData";

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export function MyReservationCard() {
  const { reservations } = HOME_MOCK_DATA;

  return (
    <List>
      {reservations.map((reservation) => (
        <ReservationItem key={reservation.reservationId} data={reservation} />
      ))}
    </List>
  );
}
