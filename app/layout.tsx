import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Celltebah Bioenergy Research Center | JNU",
  description: "Pioneering Sustainable Bioresources and Enzymatic Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">
        {/* 모든 네비게이션과 푸터는 page.tsx에서 관리하므로 여기서는 children만 렌더링합니다 */}
        {children}
      </body>
    </html>
  );
}
