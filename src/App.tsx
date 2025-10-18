// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/common/Layout";
import { routes } from "@/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<div>페이지를 찾을 수 없어요.</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
