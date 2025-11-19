import React from 'react';
import * as S from './Modal.styles';

interface CancelModalProps {
  isOpen: boolean;
  onClose: () => void;   // 모달 닫기 (취소 버튼)
  onConfirm: () => void; // 확인 버튼 (실제 삭제 로직 수행)
}

export const Modal = ({ isOpen, onClose, onConfirm }: CancelModalProps) => {
  if (!isOpen) return null;

  // 모달 바깥(Overlay)을 눌렀을 때 닫히게 하려면 Overlay에 onClick={onClose} 추가
  return (
    <S.Overlay>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.Title>취소 확인</S.Title>
        <S.Message>취소하시겠습니까?</S.Message>
        
        <S.ButtonGroup>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.ConfirmButton onClick={onConfirm}>확인</S.ConfirmButton>
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.Overlay>
  );
};