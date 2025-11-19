import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const PageTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 14px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  
  &:focus-within {
    border-color: #0056b3;
  }
`;

export const FloatingLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 12px;
  background-color: white;
  padding: 0 4px;
  font-size: 13px;
  color: #888;
  font-weight: 500;
`;

export const RequiredMark = styled.span`
  color: #ff4d4f;
  margin-left: 2px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
  background: transparent;
  cursor: pointer;
  appearance: none;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
`;

// 태그(Chip) 스타일
export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
`;

export const Chip = styled.div`
  background-color: #e0e0e0;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ChipDelete = styled.button`
  background: #999;
  border: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 10px;
  padding: 0;
`;

export const AddUserIcon = styled.div`
  color: #333;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  flex: 1;
  background-color: #0056b3;
  color: white;
  padding: 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #004494;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  background-color: #f5f5f5;
  color: #666;
  padding: 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;