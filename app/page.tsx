"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* 1️⃣  HERO 섹션 – 공식 톤, “Sustainable Future” 메시지                */
/* ------------------------------------------------------------------ */
const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950 text-white p-8"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
      Sustainable Future
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center">
      탄소중립의 해답,
    </h2>
    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
      바이오에너지가 미래입니다
    </h2>
    <p className="text-lg md:text-xl max-w-2xl text-center mb-6">
      바이오에너지는 화석연료를 대체하고 지구 온난화를 멈출 수 있는 가장
      현실적인 대안입니다. 우리 연구소는 지속 가능한 에너지 생태계를 연구합니다.
    </p>
    <div className="flex space-x-4 mt-4">
      <Link
        href="#contact"
        className="px-6 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        상담 문의하기
      </Link>
      <Link
        href="#intro"
        className="px-6 py-3 bg-white text-green-800 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        기술 상세 보기
      </Link>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 2️⃣  INTRO 섹션 – 기존 페이지에 있던 “소개” 내용 (예시)               */
/* ------------------------------------------------------------------ */
const Intro = () => (
  <section id="intro" className="py-16 bg-gray-100 text-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">연구소 소개</h2>
      <p className="max-w-3xl mx-auto text-center">
        셀테바 × 전남대학교 바이오에너지 연구센터는 지속 가능한 에너지
        기술 개발을 목표로 합니다. (필요에 따라 여기서 기존 소개 문구를
        그대로 붙여넣으세요.)
      </p>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 3️⃣  TIMELINE 섹션 – 연혁 (예시)                                    */
/* ------------------------------------------------------------------ */
const Timeline = () => (
  <section id="timeline" className="py-16 bg-white text-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">연혁</h2>
      <ul className="space-y-6">
        {/* 예시 항목 – 실제 내용은 그대로 복사·붙여넣기 */}
        <li className="flex items-start">
          <span className="w-24 font-semibold">2006</span>
          <p>전남대학교와 MOU 체결, 바이오에너지 연구 기반 구축</p>
        </li>
        <li className="flex items-start">
          <span className="w-24 font-semibold">2008</span>
          <p>
            농생대 3호관에 파일럿 플랜트 구축 – <strong>농생대</strong> 표기
            확인
          </p>
        </li>
        {/* …다른 연도 항목을 그대로 유지… */}
      </ul>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 4️⃣  RESEARCH CARDS – “Shop‑style” 카드 레이아웃                     */
/* ------------------------------------------------------------------ */
const ResearchCards = () => (
  <section id="research" className="py-16 bg-gray-50 text-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Research Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 – Bio‑Ethanol */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          ![Bio‑Ethanol](/images/bioethanol.jpg)
          <div className="p-4">
            <h3 className="font-semibold text-xl mb-2">Bio‑Ethanol</h3>
            <p>고효율 바이오에탄올 생산 기술 개발</p>
          </div>
        </div>
        {/* Card 2 – High‑Activity Enzymes */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          ![Enzyme](/images/enzyme.jpg)
          <div className="p-4">
            <h3 className="font-semibold text-xl mb-2">High‑Activity Enzymes</h3>
            <p>고활성 효소 기반 바이오촉매 연구</p>
          </div>
        </div>
        {/* Card 3 – Functional Materials */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          ![Functional Materials](/images/functional.jpg)
          <div className="p-4">
            <h3 className="font-semibold text-xl mb-2">Functional Materials</h3>
            <p>바이오 기반 기능성 소재 개발</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* 5️⃣  CONTACT FORM – Supabase‑연동 API (클라이언트 상태 포함)        */
/* ------------------------------------------------------------------ */
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center">상담 문의</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            placeholder="문의 내용"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded h-32"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {status === "sending" ? "전송 중…" : "보내기"}
          </button>
        </form>

        {status === "sent" && (
          <p className="mt-4 text-green-700 text-center">
            문의가 정상적으로 전송되었습니다.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600 text-center">
            전송에 실패했습니다. 다시 시도해 주세요.
          </p>
        )}
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* 6️⃣  페이지 전체 렌더링                                            */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <main className="font-sans antialiased text-gray-900">
      <Hero />
      <Intro />
      <Timeline />
      <ResearchCards />
      <ContactForm />
    </main>
  );
}
