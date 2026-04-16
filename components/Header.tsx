"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-slate-800">
        {/* 로고 영역: gap을 최소화하여 Celltebah 텍스트를 왼쪽으로 이동 */}
        <Link href="/" className="flex items-center gap-2 group h-full">
          <div className="relative h-10 w-52"> 
            <Image
              src="/images/jnu-logo.svg"
              alt="전남대학교 로고"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          {/* border-l 및 pl-2로 텍스트 간격 9mm 체감 수준으로 축소 */}
          <div className="flex flex-col border-l border-slate-300 pl-2 leading-tight">
            <span className="text-xl font-black tracking-tighter text-slate-900 leading-none">
              Celltebah
            </span>
            <span className="text-[9px] text-green-700 font-bold uppercase tracking-widest mt-0.5">
              Bioenergy Research Center
            </span>
          </div>
        </Link>

        {/* 메뉴 리스트: 404 방지를 위해 섹션 ID(#) 링크로 변경 */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex space-x-8 text-[15px] font-bold tracking-tight">
            <li><Link href="#intro" className="hover:text-green-600 transition-colors">연구소 소개</Link></li>
            <li><Link href="#tech" className="hover:text-green-600 transition-colors">기술·제품</Link></li>
            <li><Link href="#tech" className="hover:text-green-600 transition-colors">연구 현황</Link></li>
          </ul>
          <Link href="#contact" className="hidden sm:block bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-green-600/20">
            문의하기
          </Link>
        </div>
      </nav>
    </header>
  );
}
