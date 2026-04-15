import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "바이오에너지연구소 | 지속 가능한 미래를 위한 에너지",
  description:
    "탄소중립과 신재생 에너지 기술을 선도하는 바이오에너지연구소입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body
        className={`${inter.className} antialiased bg-white text-slate-900`}
      >
        {/* ────────────────────────── NAV ────────────────────────── */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* 로고 / 브랜드 */}
            <div className="text-2xl font-bold text-primary">BIOENERGY</div>

            {/* 메뉴 – 데스크톱 */}
            <div className="hidden md:flex gap-8 font-medium">
              {/* 절대 경로(앵커) → 어느 페이지에서든 작동 */}
              <Link
                href="/#intro"
                className="text-primary hover:text-primary/80 transition"
              >
                연구소 소개
              </Link>
              <Link
                href="/#tech"
                className="text-primary hover:text-primary/80 transition"
              >
                기술현황
              </Link>
              <Link
                href="/#contact"
                className="text-primary hover:text-primary/80 transition"
              >
                문의하기
              </Link>
            </div>

            {/* 모바일 햄버거 메뉴 (필요하면 구현) */}
            {/* <button className="md:hidden">☰</button> */}
          </div>
        </nav>

        {/* ──────────────────────── MAIN CONTENT ──────────────────────── */}
        <main className="pt-16">{children}</main>

        {/* ──────────────────────── FOOTER ──────────────────────── */}
        <footer className="bg-slate-50 border-t py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            <p>© 2024 바이오에너지연구소. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
