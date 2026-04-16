// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    // 투명도와 블러(backdrop-blur)를 넣어 바디와 차별화
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-2xl">
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* 로고 영역: 가로 길이에 맞춰 너비를 넓히고 높이를 고정 */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative h-12 w-48"> {/* 가로가 길므로 w-48 정도로 확보 */}
            <Image
              src="/images/jnu-logo.svg"
              alt="전남대학교 로고"
              fill
              className="object-contain object-left" // 왼쪽 정렬 및 비율 유지
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-white/20 pl-4">
            <span className="text-xl font-black tracking-tighter text-white group-hover:text-green-400 transition-colors">
              Celltebah
            </span>
            <span className="text-[9px] text-green-300/80 font-bold uppercase tracking-widest">
              Bioenergy Research Center
            </span>
          </div>
        </Link>

        {/* 메뉴 리스트: 폰트 두께와 간격 조정 */}
        <ul className="hidden md:flex space-x-10 text-sm font-bold tracking-tight text-white/90">
          <li>
            <Link href="/about" className="hover:text-green-400 transition-colors uppercase">연구소 소개</Link>
          </li>
          <li>
            <Link href="/technology" className="hover:text-green-400 transition-colors uppercase">기술·제품</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-green-400 transition-colors uppercase">연구 현황</Link>
          </li>
          <li>
            <Link href="/contact" className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-full transition-all flex items-center shadow-lg shadow-green-500/20">
              문의하기
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
