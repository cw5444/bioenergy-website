import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "바이오에너지연구소 | 지속 가능한 미래",
  description: "탄소중립과 신재생 에너지 기술을 선도합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth"> {/* 부드러운 스크롤 추가 */}
      <body className="antialiased bg-white text-slate-900">
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black text-green-700 tracking-tighter">
              BIOENERGY
            </Link>
            <div className="hidden md:flex gap-8 font-semibold text-slate-600">
              <Link href="/#intro" className="hover:text-green-600 transition">연구소 소개</Link>
              <Link href="/#tech" className="hover:text-green-600 transition">기술현황</Link>
              <Link href="/contact" className="hover:text-green-600 transition">문의하기</Link>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-slate-900 text-slate-400 py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2024 바이오에너지연구소. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
