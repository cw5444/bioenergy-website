"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "연구소 소개", href: "/#intro" },
    { name: "핵심 기술", href: "/#tech" },
    { name: "문의하기", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <span>🌿</span>
          <span className="tracking-tight">바이오에너지연구소</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-green-600 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            협업 문의
          </Link>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>

      {/* 모바일 메뉴 (토글) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-slate-700 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
