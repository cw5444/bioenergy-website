"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-700">
          BIOENERGY
        </Link>

        {/* PC 전용 메뉴 */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#intro" className="hover:text-green-600 transition">
            연구소 소개
          </a>
          <a href="#tech" className="hover:text-green-600 transition">
            기술 현황
          </a>
          <a href="/contact" className="hover:text-green-600 transition">
            문의하기
          </a>
        </div>
      </div>
    </nav>
  );
}
