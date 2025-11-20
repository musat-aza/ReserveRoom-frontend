import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); // 배경 어둡게
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 다른 요소보다 위에 뜨도록
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 320px;
  padding: 24px;
  border-radius: 4px; // 이미지처럼 살짝 둥글게
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 15px;
  color: #666;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end; // 오른쪽 정렬
  gap: 12px; // 버튼 사이 간격
  margin-top: 10px;
`;

export const CancelButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  
  &:hover {
    color: #333;
  }
`;

export const ConfirmButton = styled.button`
  background-color: #0056b3; // 이미지와 유사한 파란색
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #004494;
  }
`;