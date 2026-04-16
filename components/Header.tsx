// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-bio-dark text-white py-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* ← 로고 & 명칭 영역 */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* public 폴더 안에 있는 이미지 → /images/jnu-logo.svg */}
          <Image
            src="/images/jnu-logo.svg"
            alt="전남대학교 로고"
            width={40}      // 필요에 따라 조정
            height={40}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter group-hover:text-bio-green transition-colors">
              Celltebah
            </span>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Bioenergy Research Center (BRC)
            </span>
          </div>
        </Link>

        {/* ← 메뉴 리스트 (기존 유지) */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link href="/about" className="hover:text-bio-green transition-colors">
              연구소 소개
            </Link>
          </li>
          <li>
            <Link href="/technology" className="hover:text-bio-green transition-colors">
              기술·제품
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-bio-green transition-colors">
              연구 현황
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-bio-green transition-colors">
              문의
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
