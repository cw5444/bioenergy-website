// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-bio-dark text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          바이오에너지연구소
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/about" className="hover:text-bio-green">
              연구소 소개
            </Link>
          </li>
          <li>
            <Link href="/technology" className="hover:text-bio-green">
              기술·제품
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-bio-green">
              연구 현황
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-bio-green">
              문의
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
