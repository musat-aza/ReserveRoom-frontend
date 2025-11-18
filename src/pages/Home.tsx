// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";


// 라우팅 테스트를 위한 코드 (임시 홈 화면)
export default function Home() {
  const nav = useNavigate();

  return (
    <main style={{ padding: "40px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <h1 style={{ fontSize: "18px", fontWeight: 700 }}>라우팅 테스트 홈입니다</h1>

      <button onClick={() => nav("/board")} style={btnStyle}>게시판</button>
      <button onClick={() => nav("/smashroom/status")} style={btnStyle}>스매시룸</button>
      <button onClick={() => nav("/cube/status")} style={btnStyle}>큐브</button>
      <button onClick={() => nav("/booking/mine")} style={btnStyle}>내 예약</button>
    </main>
  );
}

const btnStyle: React.CSSProperties = {
  height: "44px",
  fontSize: "15px",
  fontWeight: 600,
  borderRadius: "8px",
  border: "1px solid #ddd",
  background: "#f9f9f9",
  cursor: "pointer",
};
