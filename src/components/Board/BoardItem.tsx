import styled from "styled-components";
import type { Post } from "../../components/Home/BoardCard";

const ItemContainer = styled.div`
  background-color: #e5e5e5; /* 스크린샷의 회색 배경 */
  border-radius: 16px;
  padding: 16px 20px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9d9d9; /* 호버 시 약간 진해짐 */
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const PreviewContent = styled.p`
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;

  /* 2줄까지만 보이고 말줄임표(...) 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #888;
`;

const formatDate = (isoString: string) => {
  const d = new Date(isoString);
  return `${d.getMonth() + 1}.${d.getDate()}`;
};

interface Props {
  post: Post;
  onClick: () => void;
}

export function BoardItem({ post, onClick }: Props) {
  return (
    <ItemContainer onClick={onClick}>
      <Title>{post.title}</Title>
      <PreviewContent>{post.content}</PreviewContent>
      <InfoRow>
        <span>{post.username}</span>
        <span>{formatDate(post.createdAt)}</span>
      </InfoRow>
    </ItemContainer>
  );
}
