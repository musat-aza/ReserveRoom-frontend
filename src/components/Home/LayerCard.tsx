import styled from "styled-components";
import type { ReactNode } from "react";

type LayerCardProps = {
  depth: number;
  title: string;
  onClick?: () => void;
  children?: ReactNode;
  onMoreClick?: () => void;
};

const CARD_HEIGHT = 493;
const VISIBLE_HEADER_HEIGHT = 50;

const Card = styled.section<{ depth: number }>`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  width: 328px;
  height: ${CARD_HEIGHT}px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;

  margin-top: ${({ depth }) =>
    depth === 0 ? "0" : `-${CARD_HEIGHT - VISIBLE_HEADER_HEIGHT}px`};

  padding: 24px 20px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  background-color: ${({ depth }) =>
    depth === 0 ? "#F2F4F6" : depth === 1 ? "#D1D6DB" : "#8B95A1"};

  color: ${({ depth }) => (depth === 2 ? "#fff" : "#333")};
  z-index: ${({ depth }) => depth};
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const IconButton = styled.button<{ depth: number }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  opacity: ${({ depth }) => (depth === 2 ? 1 : 0)};
  pointer-events: ${({ depth }) => (depth === 2 ? "auto" : "none")};

  transition: opacity 0.3s ease, background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateX(2px);
  }
`;

const ContentArea = styled.div<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  transition: opacity 0.2s ease;
  flex: 1;
  min-height: 0;
`;

const ChevronRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export function LayerCard({
  depth,
  title,
  onClick,
  children,
  onMoreClick,
}: LayerCardProps) {
  const isFront = depth === 2;

  const handleMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMoreClick) onMoreClick();
  };

  return (
    <Card depth={depth} onClick={onClick}>
      <Header>
        <Title>{title}</Title>
        {onMoreClick && (
          <IconButton depth={depth} onClick={handleMoreClick}>
            <ChevronRightIcon />
          </IconButton>
        )}
      </Header>

      <ContentArea show={isFront}>{children}</ContentArea>
    </Card>
  );
}
