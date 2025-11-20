// src/components/smashroom/DateFilter.tsx

import styled from "styled-components";

interface DateFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function DateFilter({ value, onChange }: DateFilterProps) {
  const today = new Date();

  // 앞으로 7일 날짜 목록 생성
  const dateOptions = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");

    return {
      value: `${yyyy}-${mm}-${dd}`,
      label: `${mm}월 ${dd}일`,
    };
  });

  return (
    <Wrapper>
      <Row>
        <Label>예약일자</Label>
        <Select value={value} onChange={(e) => onChange(e.target.value)}>
          {dateOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </Row>
    </Wrapper>
  );
}

/* ---------- styled ---------- */

const Wrapper = styled.section`
  margin-top: 16px;
  padding: 12px 12px 16px;
  border-radius: 12px;
  background-color: #f7f7f8;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const Label = styled.span`
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
`;

const Select = styled.select`
  flex: 1;
  height: 40px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  font-size: 14px;
  background-color: #ffffff;
`;
