import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* ① 브랜드 텍스트 */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-800">Celltebah</span>
          {/* vertical separator */}
          <div className="border-l h-6" />
          {/* JNU 로고 – 작게, 오른쪽 정렬 */}
          <Image
            src="/images/jnu-logo.png"
            alt="JNU Logo"
            width={96}
            height={28}
            className="h-7 w-auto"
          />
        </div>

        {/* ② 네비게이션 (앵커 링크) */}
        <ul className="flex space-x-4 text-sm font-medium">
          <li>
            <Link href="#intro" className="hover:text-green-600 transition">
              소개
            </Link>
          </li>
          <li>
            <Link href="#timeline" className="hover:text-green-600 transition">
              연혁
            </Link>
          </li>
          <li>
            <Link href="#status" className="hover:text-green-600 transition">
              연구 현황
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-green-600 transition">
              연락처
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
