// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "바이오에너지연구소 | 지속 가능한 미래를 위한 에너지",
  description: "탄소중립과 신재생 에너지 기술을 선도하는 바이오에너지연구소입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {/* 네비게이션 바 */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-2xl font-bold text-green-700">BIOENERGY</div>
            <div className="hidden md:flex gap-8 font-medium">
              <a href="#intro" className="hover:text-green-600 transition">연구소 소개</a>
              <a href="#tech" className="hover:text-green-600 transition">기술현황</a>
              <a href="#contact" className="hover:text-green-600 transition">문의하기</a>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        {/* 푸터 */}
        <footer className="bg-slate-50 border-t py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>© 2024 바이오에너지연구소. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
