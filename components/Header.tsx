"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { name: "연구소 소개", href: "#intro" },
    { name: "연혁", href: "#timeline" },
    { name: "연구 현황", href: "#status" },
    { name: "주요 사업", href: "#product" }, // 프로덕트의 한글명을 '주요 사업'으로 제안
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* 좌측: 로고 그룹 */}
        <div className="flex items-center gap-4">
          <Link href="/" onClick={scrollToTop} className="flex flex-col leading-tight">
            <span className="text-2xl font-black tracking-tighter text-slate-900">Celltebah</span>
            <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">Bioenergy Research Center</span>
          </Link>
          <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block" />
          <a href="https://www.jnu.ac.kr" target="_blank" rel="noopener noreferrer" className="relative h-7 w-28 hidden sm:block">
            <Image src="/images/jnu-logo.svg" alt="전남대학교" fill className="object-contain opacity-80" unoptimized />
          </a>
        </div>

        {/* 우측: 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex space-x-8 text-[15px] font-bold text-slate-600">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-green-600 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-green-500 transition-all shadow-md">
            문의하기
          </Link>
        </div>

        {/* 모바일: 햄버거 버튼 */}
        <button className="md:hidden flex flex-col gap-1.5 z-[110]" onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-slate-900 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* 모바일 사이드바 메뉴 */}
        <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-bold text-slate-800">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-green-600">
                {link.name}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-green-600 text-white px-10 py-4 rounded-full shadow-lg">
              문의하기
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
