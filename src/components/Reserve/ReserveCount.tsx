import * as S from "./ReserveCount.styles";

interface ReservationSummaryProps {
  total: number;
  smash: number;
  cube: number;
}

export const ReserveCount = ({ total, smash, cube }: ReservationSummaryProps) => {
  return (
    <S.Container>
      <span>총 {total}건</span>
      <S.Divider />
      <span>스매시 {smash}건</span>
      <span>큐브 {cube}건</span>
    </S.Container>
  );
};

export default ReserveCount;
