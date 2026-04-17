"use client";

import Image from "next/image";
import { useState } from "react";

/*--------------------------------------------------------------
  Helper: Supabase contact endpoint API 호출
--------------------------------------------------------------*/
async function submitContact(formData: FormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("전송에 실패했습니다.");
}

/*--------------------------------------------------------------
  Main Page Component
--------------------------------------------------------------*/
export default function HomePage() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("보내는 중…");
    const formData = new FormData(e.currentTarget);
    try {
      await submitContact(formData);
      setStatus("✅ 메시지를 잘 보냈어요! 곧 답변드릴게요.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("❗ 전송에 실패했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <main className="font-sans text-gray-900">
      {/* 1️⃣ HERO - 배경 이미지와 텍스트 레이아웃 최적화 */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lab-production-1.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-emerald-900/70 to-slate-950/90" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Celltebah × 전남대학교 바이오에너지연구소
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
            농업 부산물로 친환경 바이오에탄올과 고활성 효소를 만들며,
            <br />
            지속가능한 미래 에너지와 고부가가치 바이오소재를 연구합니다.
          </p>
          <a
            href="#intro"
            className="mt-8 inline-block px-6 py-3 bg-white text-green-800 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            연구소 소개 보기 →
          </a>
        </div>
      </section>

      {/* 2️⃣ INTRODUCTION */}
      <section id="intro" className="scroll-mt-24 py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">
          안녕! 우리는 바이오에너지연구소에요
        </h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-4">
          <p>
            전 세계가 화석연료를 대체할 지속가능한 에너지를 찾는 요즘,
            우리 연구소는 농업‑부산물을 활용한 바쁜 <strong>‘바이오 공장’</strong>으로
            변신하고 있어요.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>농업 부산물에서 <em>바이오에탄올</em> 생산 기술</li>
            <li>고활성 <em>셀룰라제 효소</em> 대량 생산 (Molecular Farming)</li>
            <li>바이오‑활성 물질을 활용한 <em>헬스·식품·의료</em> 자원 개발</li>
          </ul>
          <p>
            2008년에 설립돼 10년 이상 연속으로 정부·산업·해외 기관과
            공동 연구를 진행하고 있답니다.
          </p>
        </div>
      </section>

      {/* 3️⃣ TIMELINE - 연혁 */}
      <section id="timeline" className="scroll-mt-24 py-16 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">연구소 연혁</h2>
        <ul className="max-w-4xl mx-auto space-y-6">
          <li className="flex items-start">
            <span className="w-24 font-mono text-green-700 shrink-0">2012‑04</span>
            <p>파일럿 플랜트 건설 완료 – 실증 단계 진입</p>
          </li>
          <li className="flex items-start">
            <span className="w-24 font-mono text-green-700 shrink-0">2009‑07</span>
            <p>머니투데이 “신성장동력 우수기업” 인증 획득</p>
          </li>
          <li className="flex items-start">
            <span className="w-24 font-mono text-green-700 shrink-0">2008‑06</span>
            <p>전남대 특성화 연구소 지정 (연 1억 원, 5년)</p>
          </li>
          <li className="flex items-start">
            <span className="w-24 font-mono text-green-700 shrink-0">2008‑01</span>
            <p>바이오에너지연구소 개소 (농양대 3호관)</p>
          </li>
          <li className="flex items-start">
            <span className="w-24 font-mono text-green-700 shrink-0">2007‑11</span>
            <p>연구소 설립 승인</p>
          </li>
        </ul>
      </section>

      {/* 4️⃣ RESEARCH STATUS - 이미지 경로 업데이트 반영 */}
      <section id="status" className="scroll-mt-24 py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">현재 진행 중인 연구</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image
                src="/images/bioethanol-edited.jpg"
                alt="Bio-Ethanol"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">바이오에탄올 생산</h3>
              <p className="text-sm text-gray-600 mb-4">
                농업 부산물을 전처리·당화·발효해 친환경 에탄올을 만듭니다.
              </p>
              <a href="#" className="text-green-700 hover:underline text-sm font-bold">더 알아보기 →</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image
                src="/images/enzyme-edited.jpg"
                alt="Enzyme"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">고활성 가수분해 효소</h3>
              <p className="text-sm text-gray-600 mb-4">
                식물 기반 공정으로 효소를 저렴하게 대량 생산합니다.
              </p>
              <a href="#" className="text-green-700 hover:underline text-sm font-bold">더 알아보기 →</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image
                src="/images/functional-edited.jpg"
                alt="Materials"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">고부가가치 기능성 물질</h3>
              <p className="text-sm text-gray-600 mb-4">
                천연 소재에서 의약 및 화장품 원료를 추출하고 개발합니다.
              </p>
              <a href="#" className="text-green-700 hover:underline text-sm font-bold">더 알아보기 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ CONTACT */}
      <section id="contact" className="scroll-mt-24 py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">함께 얘기해볼까요? 📧</h2>
        <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="이름"
            required
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            name="email"
            type="email"
            placeholder="이메일"
            required
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          />
          <textarea
            name="message"
            placeholder="메세지"
            rows={4}
            required
            className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded font-bold hover:bg-green-800 transition"
          >
            보내기
          </button>
          {status && <p className="mt-3 text-center text-sm font-medium">{status}</p>}
        </form>
      </section>

      {/* 6️⃣ FOOTER */}
      <footer className="py-8 text-center text-sm bg-gray-800 text-gray-300">
        © 2010 - {new Date().getFullYear()} @Celltebah (Bio-Energy Research Center, JNU)
      </footer>
    </main>
  );
}

