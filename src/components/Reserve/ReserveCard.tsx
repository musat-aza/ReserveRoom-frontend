import { useNavigate } from 'react-router-dom';
import * as S from "./ReserveCard.styles";

interface ReserveCardProps {
  reservationId: number;
  roomName: string;
  bookerName: string;
  startTime: string;
  purpose: string;
  attendeeNames?: string;
  onEdit?: () => void;
  onCancel?: () => void;
}

export const ReserveCard = ({
  reservationId,
  roomName,
  bookerName,
  startTime,
  purpose,
  attendeeNames,
  onEdit,
  onCancel,
}: ReserveCardProps) => {
  const navigate = useNavigate();


  
  return (
    // 2. 전체 컨테이너에 클릭 이벤트 부여 (cursor: pointer 추가)
    <S.Container >   

      <S.InfoRow>
        <S.Label>유형</S.Label>
        <S.Value>{roomName}</S.Value>
      </S.InfoRow>
      <S.InfoRow>
        <S.Label>예약자</S.Label>
        <S.Value>{bookerName}</S.Value>
      </S.InfoRow>
      <S.InfoRow>
        <S.Label>예약일시</S.Label>
        <S.Value>{startTime}</S.Value>
      </S.InfoRow>
      <S.InfoRow>
        <S.Label>용도</S.Label>
        <S.Value>{purpose}</S.Value>
      </S.InfoRow>
      {attendeeNames && (
        <S.InfoRow>
          <S.Label>동반이용자</S.Label>
          <S.Value>{attendeeNames}</S.Value>
        </S.InfoRow>
      )}

      <S.ButtonArea >
        <S.EditButton onClick={onEdit}>예약변경</S.EditButton>
        <S.CancelButton onClick={onCancel}>예약취소</S.CancelButton>
      </S.ButtonArea>

    </S.Container>
  );
};