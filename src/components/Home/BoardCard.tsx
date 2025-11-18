import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BoardIcon from "../../assets/board.svg";

export interface Post {
  postId: number;
  username: string;
  title: string;
  content: string;
  roomtype: string;
  postCategory: string;
  createdAt: string;
  photoUrl?: string;
}

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 328px;
  height: 78px;

  margin: 0 auto 16px;
  padding: 0 20px;

  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  overflow: hidden;
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

const RoomTypeBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: #3182f6;
  background-color: #eff6ff;
  padding: 2px 6px;
  border-radius: 4px;
  width: fit-content;
`;

const Label = styled.span`
  font-size: 11px;
  color: #777;
`;

const TitleText = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #333;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
`;

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AllText = styled.span`
  font-size: 12px;
  color: #999;
  white-space: nowrap;
`;

const ArrowIcon = styled.span`
  color: #ccc;
  font-size: 18px;
`;

interface RecentBoardCardProps {
  latestPost: Post | null;
}

export function RecentBoardCard({ latestPost }: RecentBoardCardProps) {
  const nav = useNavigate();

  // ✅ 데이터 로직 제거, props만 사용
  if (!latestPost) return null;

  return (
    <CardContainer onClick={() => nav("/board")}>
      <LeftGroup>
        <Icon src={BoardIcon} alt="board icon" />

        <TextGroup>
          <Label>최근 게시글</Label>
          <TitleText>
            <RoomTypeBadge>{latestPost.roomtype}</RoomTypeBadge>
            {latestPost.title}
          </TitleText>
        </TextGroup>
      </LeftGroup>

      <RightGroup>
        <AllText>전체 보기</AllText>
        <ArrowIcon>›</ArrowIcon>
      </RightGroup>
    </CardContainer>
  );
}
