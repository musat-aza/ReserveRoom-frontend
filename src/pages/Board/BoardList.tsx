// src/pages/Board.tsx

import { useState } from "react";
import styled from "styled-components";

import { LayerCard } from "../../components/Home/LayerCard";
import { BoardListCard } from "../../components/Board/BoardListCard";

import { MOCK_BOARD_POSTS } from "../../Mocks/boardMockData";
import type { Post } from "../../components/Home/BoardCard";

type BoardType = "CUBE" | "SMASH";

const Page = styled.main`
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

const SearchBar = styled.div`
  width: 328px;
  height: 50px;
  background-color: #e0e0e0;
  border-radius: 25px;
  margin: 20px auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-weight: 600;
  font-size: 15px;
`;

const CardStack = styled.div`
  position: relative;
  margin-top: 10px;
`;

export default function Board() {
  const [order, setOrder] = useState<BoardType[]>(["CUBE", "SMASH"]);

  const handleClickCard = (type: BoardType) => {
    if (order[order.length - 1] === type) return;
    setOrder((prev) => [...prev.filter((t) => t !== type), type]);
  };

  const getTitle = (type: BoardType) => {
    return type === "CUBE" ? "큐브 게시판" : "스매시룸 게시판";
  };

  const filterPosts = (type: BoardType): Post[] => {
    return MOCK_BOARD_POSTS.filter(
      (p) => p.roomtype === type || p.roomtype === "ALL"
    ) as Post[];
  };

  return (
    <Page>
      <SearchBar>검색</SearchBar>

      <CardStack>
        {order.map((type, index) => {
          const virtualDepth = index === 0 ? 0 : 2;

          return (
            <LayerCard
              key={type}
              depth={virtualDepth}
              title={getTitle(type)}
              onClick={() => handleClickCard(type)}
              onMoreClick={() => alert("글쓰기 페이지도 만들어야 해!")}
              iconType="plus"
            >
              <BoardListCard posts={filterPosts(type)} title={getTitle(type)} />
            </LayerCard>
          );
        })}
      </CardStack>
    </Page>
  );
}
