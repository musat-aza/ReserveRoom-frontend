// src/pages/BoardDetail.tsx

import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

import { MOCK_BOARD_POSTS } from "../../Mocks/boardMockData";
import type { Post } from "../../components/Home/BoardCard";

const Page = styled.main`
  padding: 24px 20px 40px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 16px;
`;

const CategoryTag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: #e5e8eb;
  color: #4e5968;
  margin-right: 6px;
`;

const RoomTypeTag = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: #e5f2ff;
  color: #3182f6;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 6px;
  color: #212121;
`;

const Meta = styled.div`
  font-size: 12px;
  color: #8b95a1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Author = styled.span``;

const CreatedAt = styled.span``;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e8eb;
  margin: 16px 0;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #4e5968;
  white-space: pre-wrap;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-top: 16px;
  object-fit: cover;
`;

const BackButton = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #d1d6db;
  color: #212121;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #c1c6cc;
  }
`;

const EmptyState = styled.div`
  max-width: 360px;
  margin: 80px auto 0;
  text-align: center;
  color: #8b95a1;
  font-size: 14px;
`;

const formatCategory = (category: Post["postCategory"]) => {
  switch (category) {
    case "LOST":
      return "분실";
    case "FOUND":
      return "발견";
    case "GENERAL":
    default:
      return "기타";
  }
};

const formatRoomType = (roomtype: Post["roomtype"]) => {
  switch (roomtype) {
    case "CUBE":
      return "큐브";
    case "SMASH":
      return "스매시룸";
    default:
      return roomtype;
  }
};

const formatDateTime = (isoString: string) => {
  const d = new Date(isoString);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hour = String(d.getHours()).padStart(2, "0");
  const minute = String(d.getMinutes()).padStart(2, "0");
  return `${year}.${month}.${day} ${hour}:${minute}`;
};

export default function BoardDetail() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  const postId = Number(id);
  const post = MOCK_BOARD_POSTS.find((p) => p.postId === postId) ?? null;

  if (!post) {
    return (
      <Page>
        <EmptyState>
          해당 게시글을 찾을 수 없습니다.
          <br />
          목록에서 다시 시도해주세요.
          <BackButton onClick={() => nav(-1)}>뒤로가기</BackButton>
        </EmptyState>
      </Page>
    );
  }
  console.log("photoUrl 👉", post.photoUrl);
  return (
    <Page>
      <Wrapper>
        <Header>
          <div>
            <CategoryTag>{formatCategory(post.postCategory)}</CategoryTag>
            <RoomTypeTag>{formatRoomType(post.roomtype)}</RoomTypeTag>
          </div>

          <Title>{post.title}</Title>

          <Meta>
            <Author>{post.username}</Author>
            <CreatedAt>{formatDateTime(post.createdAt)}</CreatedAt>
          </Meta>
        </Header>
        <Divider />
        <Content>{post.content}</Content>
        {post.photoUrl && post.photoUrl.trim() !== "" && (
          <Photo src={post.photoUrl} alt="게시글 첨부 이미지" />
        )}
        <BackButton onClick={() => nav(-1)}>목록으로</BackButton>
      </Wrapper>
    </Page>
  );
}
