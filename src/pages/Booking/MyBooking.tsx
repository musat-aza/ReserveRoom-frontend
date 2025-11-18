import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReserveCount from "../../components/Reserve/ReserveCount";
import { ReserveCard } from "../../components/Reserve/ReserveCard";
import { Modal } from "../../components/common/modal/modal";
// import axios from "axios"; // 당분간 주석 처리
import DUMMY_DATA from "../../components/Reserve/reserveDummy";

interface Reservation {
  reservationId: number;
  roomName: string;
  bookerName: string;
  startTime: string;
  purpose: string;
  attendeeNames?: string;
}

// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function MyBooking() {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    // --- 백엔드 연결 전 테스트용 코드 시작 ---
    const timer = setTimeout(() => {
      setReservations(DUMMY_DATA);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);// 로딩 화면 0.5초 정도 보여주고 데이터 세팅

    // --- 백엔드 연결 전 테스트용 코드 끝 ---

    /* 원래 코드 (나중에 주석 해제)
    async function fetchReservations() {
      try {
        const res = await axios.get(`${BASE_URL}/api/reservation`);
        setReservations(res.data);
      } catch (e) {
        console.error("예약 조회 실패", e);
      } finally {
        setLoading(false);
      }
    }
    fetchReservations();
    */
  }, []);

  if (loading) return <div>로딩중...</div>;

  // 1. 카드에서 '예약취소' 버튼 눌렀을 때 실행
  const handleCancelClick = (id: number) => {
    setSelectedId(id); // 어떤 놈을 지울지 저장
    setIsModalOpen(true); // 모달 열기
  };

  // 2. 모달에서 '확인' 눌렀을 때 실행 (진짜 삭제)
  const handleConfirmDelete = () => {
    if (selectedId === null) return;

    console.log(`예약 ID ${selectedId} 삭제 요청 API 전송`);
    
    // 1) API 호출 로직 (axios.delete...)
    // 2) 성공 시 목록에서 제거 (UI 업데이트)
    setReservations(prev => prev.filter(r => r.reservationId !== selectedId));

    // 3) 모달 닫기 및 초기화
    setIsModalOpen(false);
    setSelectedId(null);
  };

  // 3. 모달에서 '취소' 눌렀을 때
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };


  // 예약 변경 버튼 클릭
  const handleEditClick = (id: number) => {
    navigate(`/booking/edit/${id}`);
  };


  // Count 계산
  const total = reservations.length;
  const smash = reservations.filter((r) => r.roomName.includes("스매시")).length;
  const cube = reservations.filter((r) => r.roomName.includes("큐브")).length;

  return (
    <div style={{ padding: "20px" }}>
      {/* 예약 건수 확인 (Total: 4, Smash: 2, Cube: 2 예상) */}
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
              key={res.reservationId} // map 돌릴 때 key prop 필수
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

