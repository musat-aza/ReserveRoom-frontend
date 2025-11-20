import styled from "styled-components";

import { ReservationItem } from "./ReservationItem";
import type { ReservationData } from "./ReservationItem";

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export function MyReservationCard({
  reservations,
}: {
  reservations: ReservationData[];
}) {
  return (
    <List>
      {reservations.map((reservation) => (
        <ReservationItem key={reservation.reservationId} data={reservation} />
      ))}
    </List>
  );
}
