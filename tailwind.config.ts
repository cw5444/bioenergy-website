// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // Next.js가 사용하는 파일들을 모두 스캔하도록 지정
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더를 쓰는 경우
  ],
  theme: {
    extend: {
      colors: {
        // “primary” 라는 이름으로 녹색 팔레트를 정의
        primary: {
          light: "#4ade80",   // green‑400
          DEFAULT: "#16a34a", // green‑600 (메인 색)
          dark: "#15803d",    // green‑700
        },
        // 필요하면 추가 색상도 여기서 확장
        // 예: secondary: "#ffb400",
      },
    },
  },
  plugins: [],
};

export default config;
