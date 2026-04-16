"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-100 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-slate-800">
        {/* 로고 영역: 가로 길이에 맞게 넓은 공간 확보 */}
        <Link href="/" className="flex items-center gap-4 group h-full">
          <div className="relative h-10 w-56"> 
            <Image
              src="/images/jnu-logo.svg"
              alt="전남대학교 로고"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="hidden lg:flex flex-col border-l border-slate-300 pl-4">
            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
              Celltebah
            </span>
            <span className="text-[9px] text-green-700 font-bold uppercase tracking-widest mt-1">
              Bioenergy Research Center
            </span>
          </div>
        </Link>

        {/* 메뉴 리스트: 수직 중앙 정렬(items-center) 보정 */}
        <div className="flex items-center gap-10">
          <ul className="hidden md:flex space-x-8 text-sm font-bold tracking-tight">
            <li><Link href="/about" className="hover:text-green-600 transition-colors">연구소 소개</Link></li>
            <li><Link href="/technology" className="hover:text-green-600 transition-colors">기술·제품</Link></li>
            <li><Link href="/projects" className="hover:text-green-600 transition-colors">연구 현황</Link></li>
          </ul>
          <Link href="/contact" className="hidden sm:block bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-green-600/20">
            문의하기
          </Link>
        </div>
      </nav>
    </header>
  );
}
