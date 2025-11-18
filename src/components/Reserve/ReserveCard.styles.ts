import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e5e5e5;
  padding: 16px 20px;
  border-radius: 6px;
  width: auto;
  background-color: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const Label = styled.span`
  width: 90px;
  color: #888;
  font-size: 0.875rem;
`;

export const Value = styled.span`
  color: #333;
  font-size: 0.875rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 14px;
`;

export const EditButton = styled.button`
  background: #4c82f7;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    background: #3b6de0;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: #ff4b4b;
  border: none;
  padding: 8px 14px;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
