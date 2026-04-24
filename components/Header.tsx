"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // 최상단으로 이동하는 함수
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* 좌측: Celltebah + 전남대 로고 */}
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="flex flex-col leading-tight"
          >
            {/* 한글 "셀테바" 대신 영문 "Celltebah" 적용 */}
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Celltebah
            </span>
            <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">
              Bioenergy Research Center
            </span>
          </Link>

          <div className="h-8 w-[1px] bg-slate-200 mx-1" />

          <a
            href="https://www.jnu.ac.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-7 w-32"
          >
            <Image
              src="/images/jnu-logo.svg"
              alt="전남대학교"
              fill
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </a>
        </div>

        {/* 우측: 메뉴 – 원래 코드 유지 */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex space-x-8 text-[15px] font-bold text-slate-600">
            <Link href="#intro" className="hover:text-green-600 transition-colors">
              연구소 소개
            </Link>
            <Link href="#timeline" className="hover:text-green-600 transition-colors">
              연혁
            </Link>
            <Link href="#status" className="hover:text-green-600 transition-colors">
              연구 현황
            </Link>
          </div>

          <Link
            href="#contact"
            className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 transition-all shadow-md"
          >
            상담하기
          </Link>
        </div>
      </nav>
    </header>
  );
}
