// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header"; // 1. Header 컴포넌트 임포트

export const metadata: Metadata = {
  title: "바이오에너지연구소 | 지속 가능한 미래",
  description: "탄소중립과 신재생 에너지 기술을 선도합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        {/* 2. 기존 <nav>...</nav> 부분을 지우고 아래 한 줄로 대체 */}
        <Header /> 
        
        {/* Header가 sticky이므로 pt-16은 유지하거나 Header 높이에 맞춰 조절 */}
        <main>{children}</main>

        <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2024 바이오에너지연구소. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
