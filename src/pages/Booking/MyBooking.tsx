// src/pages/Booking/MyBooking.tsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReserveCount from "../../components/Reserve/ReserveCount";
import { ReserveCard } from "../../components/Reserve/ReserveCard";
import { Modal } from "../../components/common/modal/Modal";
import { DUMMY_DATA } from "../../components/Reserve/reserveDummy";

interface Reservation {
  reservationId: number;
  roomName: string;
  bookerName: string;
  startTime: string;
  purpose: string;
  attendeeNames?: string;
}

export default function MyBooking() {
  const navigate = useNavigate();

  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReservations(DUMMY_DATA);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div>로딩중...</div>;

  const handleCancelClick = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedId === null) return;

    console.log(`예약 ID ${selectedId} 삭제 요청`);
    setReservations((prev) =>
      prev.filter((r) => r.reservationId !== selectedId)
    );

    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  // 예약 변경 버튼 → /booking/edit/:id 이동
  const handleEditClick = (id: number) => {
    navigate(`/booking/edit/${id}`);
  };

  const total = reservations.length;
  const smash = reservations.filter((r) =>
    r.roomName.includes("스매시")
  ).length;
  const cube = reservations.filter((r) => r.roomName.includes("큐브")).length;

  return (
    <div style={{ padding: "20px" }}>
      <ReserveCount total={total} smash={smash} cube={cube} />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {reservations.length === 0 ? (
          <div style={{ color: "#999", marginTop: "20px" }}>
            예약 내역이 없습니다.
          </div>
        ) : (
          reservations.map((res) => (
            <ReserveCard
              key={res.reservationId}
              reservationId={res.reservationId}
              roomName={res.roomName}
              bookerName={res.bookerName}
              startTime={res.startTime}
              purpose={res.purpose}
              attendeeNames={res.attendeeNames}
              onEdit={() => handleEditClick(res.reservationId)}
              onCancel={() => handleCancelClick(res.reservationId)}
            />
          ))
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
