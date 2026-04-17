"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center text-slate-800">
        {/* 역배치 로고 영역: Celltebah(텍스트)를 앞으로, 전남대 로고를 뒤로 */}
        <Link href="/" className="flex items-center gap-3 group h-full">
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
              Celltebah
            </span>
            <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest mt-0.5">
              Bioenergy Research Center
            </span>
          </div>
          
          {/* 구분선 및 축소된 전남대 로고 */}
          <div className="h-8 w-[1px] bg-slate-200 mx-1" />
          <div className="relative h-7 w-40"> 
            <Image
              src="/images/jnu-logo.svg"
              alt="전남대학교 로고"
              fill
              className="object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity"
              priority
            />
          </div>
        </Link>

        {/* 메뉴 리스트: 연구 현황 아이디를 #status로 분리 */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex space-x-8 text-[15px] font-bold tracking-tight text-slate-600">
            <li><Link href="#intro" className="hover:text-green-600 transition-colors">연구소 소개</Link></li>
            <li><Link href="#tech" className="hover:text-green-600 transition-colors">기술·제품</Link></li>
            <li><Link href="#status" className="hover:text-green-600 transition-colors">연구 현황</Link></li>
          </ul>
          <Link href="#contact" className="hidden sm:block bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-green-600/20">
            상담하기
          </Link>
        </div>
      </nav>
    </header>
  );
}
