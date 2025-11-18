// src/components/Board/BoardListCard.tsx

import styled from "styled-components";
import { BoardItem } from "./BoardItem";
import type { Post } from "../../components/Home/BoardCard";
import { useNavigate } from "react-router-dom";

const ScrollArea = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;
  /* 스크롤바 숨김 (선택사항) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const EmptyState = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
`;

interface Props {
  posts: Post[];
  title: string;
}

export function BoardListCard({ posts }: Props) {
  const nav = useNavigate();
  return (
    <ScrollArea>
      {posts.length > 0 ? (
        posts.map((post) => (
          <BoardItem
            key={post.postId}
            post={post}
            onClick={() => nav(`/board/${post.postId}`)}
          />
        ))
      ) : (
        <EmptyState>게시글이 없습니다.</EmptyState>
      )}
    </ScrollArea>
  );
}
