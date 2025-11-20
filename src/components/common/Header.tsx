import styled from "styled-components";
import { Link, useLocation, useNavigate, matchPath } from "react-router-dom";
import { routes } from "@/routes";
import type { RouteMeta } from "@/routes";

import backIcon from "@/assets/back_icon.svg";
import mypageIcon from "@/assets/mypage_icon.svg";

/* ---------- 스타일 ---------- */
const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #eee;
`;
const Side = styled.div`
  min-width: 64px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 600;
`;

/* ---------- 현재 경로의 meta 찾기 ---------- */
function useCurrentMeta(): RouteMeta {
  const { pathname } = useLocation();
  const sorted = [...routes].sort((a, b) => b.path.length - a.path.length);
  for (const r of sorted) {
    const matched = matchPath({ path: r.path, end: true }, pathname);
    if (matched) return r.meta ?? {};
  }
  return {};
}

export default function Header() {
  const meta = useCurrentMeta();
  const nav = useNavigate();

  if (meta.visible === false) return null;

  const handleBack = () => {
    const idx =
      (window.history.state && (window.history.state as any).idx) ?? 0;
    if (idx > 0) nav(-1);
    else nav("/");
  };

  const showBack = meta.showBack ?? false;
  const showMy = meta.showMy ?? true;
  const title = meta.title ?? "";

  return (
    <Bar>
      <Side>
        {showBack && (
          <button
            onClick={handleBack}
            aria-label="뒤로가기"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img src={backIcon} alt="뒤로가기" width={24} height={24} />
          </button>
        )}
      </Side>

      <Title>{title}</Title>

      <Side style={{ justifyContent: "flex-end" }}>
        {showMy && (
          <Link to="/mypage" aria-label="마이페이지">
            <img src={mypageIcon} alt="마이페이지" width={24} height={24} />
          </Link>
        )}
      </Side>
    </Bar>
  );
}
