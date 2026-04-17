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
      {/*----------------------------------------------------------
        1️⃣ HERO – 고퀄리티 배경 이미지 적용으로 세련미 업그레이드
      -----------------------------------------------------------*/}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-white p-8 overflow-hidden"
      >
        {/* 배경 이미지 (생성된 lab-production-1 사용 추천) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lab-production-1.png"
            alt="Hero Lab Background"
            fill
            className="object-cover"
            priority
          />
          {/* 텍스트 가독성을 위한 그라디언트 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 via-emerald-900/70 to-slate-950/90" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Celltebah <span className="text-green-400">×</span> JNU
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            농업 부산물로 친환경 바이오에탄올과 고활성 효소를 만들며,
            <br className="hidden md:block" />
            지속가능한 미래 에너지와 고부가가치 바이오소재를 연구합니다.
          </p>
          <a
            href="#intro"
            className="mt-10 inline-block px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-400 hover:scale-105 transition-all shadow-lg"
          >
            연구소 이야기 듣기 ↓
          </a>
        </div>
      </section>

      {/*----------------------------------------------------------
        2️⃣ INTRODUCTION – Friendly tone
      -----------------------------------------------------------*/}
      <section id="intro" className="scroll-mt-24 py-24 px-4 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-green-800">
            안녕! 우리는 바이오에너지연구소에요 🌱
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-gray-700 space-y-6">
            <p>
              전 세계가 화석연료를 대체할 지속가능한 에너지를 찾는 요즘,
              우리 연구소는 농업-부산물을 활용한 바쁜 <strong>‘바이오 공장’</strong>으로
              변신하고 있어요.
            </p>
            <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
              <h3 className="font-bold text-green-900 mb-4 text-xl">우리는 이런 일을 해요!</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">●</span>
                  <span>농업 부산물에서 <strong>바이오에탄올</strong>을 뽑아내는 기술 연구</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">●</span>
                  <span>고활성 <strong>셀룰라제 효소</strong>를 효율적으로 대량 생산</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">●</span>
                  <span>바이오-활성 물질로 <strong>헬스·식품·의료</strong>의 새로운 가치 창출</span>
                </li>
              </ul>
            </div>
            <p className="pt-4">
              2008년에 설립돼 지금은 10년 이상 연속으로 다양한 파트너들과 함께하고 있답니다.
              <strong>우리와 함께 친환경 미래를 만든다</strong>는 생각, 어떠세요?
            </p>
          </div>
        </div>
      </section>

      {/*----------------------------------------------------------
        3️⃣ TIMELINE – Research History
      -----------------------------------------------------------*/}
      <section id="timeline" className="scroll-mt-24 py-24 px-4 md:px-16 bg-slate-50">
        <h2 className="text-3xl font-bold mb-12 text-center">연구소 연혁</h2>
        <div className="max-w-4xl mx-auto border-l-2 border-green-200 pl-8 ml-4 md:ml-auto">
          <ul className="space-y-10 relative">
            {[
              { date: "2012.04", text: "바이오에탄올 생산 파일럿 플랜트 건설 완료!" },
              { date: "2011.06", text: "파일럿 플랜트 제작 지원 선정 (Phyto Farm & Gene)" },
              { date: "2009.07", text: "대한민국 신성장동력 우수기업 인증 획득" },
              { date: "2009.01", text: "Bio-Energy & Technology 국제 심포지움 개최" },
              { date: "2008.06", text: "전남대학교 특성화 연구소(CNU-XRC) 선정" },
              { date: "2008.01", text: "바이오에너지연구소 정식 개소 🎊" },
              { date: "2007.11", text: "연구소 설립 승인" },
            ].map((item, idx) => (
              <li key={idx} className="relative">
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-white" />
                <span className="block font-mono text-green-700 font-bold mb-1">{item.date}</span>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*----------------------------------------------------------
        4️⃣ RESEARCH STATUS – 편집된 고해상도 이미지 적용
      -----------------------------------------------------------*/}
      <section id="status" className="scroll-mt-24 py-24 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-16 text-center">현재 진행 중인 연구</h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="group border-none rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-0 overflow-hidden bg-gray-50 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/bioethanol-edited.jpg"
                alt="Bio-Ethanol"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-3 text-green-800">바이오에탄올 생산</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                농업 부산물을 전처리·당화·발효해 친환경 에탄올을 만듭니다. 
                플랜트 실증 단계를 지나 상용화를 준비하고 있어요.
              </p>
              <a href="#" className="mt-auto font-bold text-green-600 hover:text-green-800">
                기술 상세 보기 →
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group border-none rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-0 overflow-hidden bg-gray-50 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/enzyme-edited.jpg"
                alt="Enzyme"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-3 text-emerald-800">고활성 가수분해 효소</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Molecular Farming 기술을 활용해 산업용 효소의 
                대량 생산과 저비용 공정을 혁신하고 있습니다.
              </p>
              <a href="#" className="mt-auto font-bold text-emerald-600 hover:text-emerald-800">
                기술 상세 보기 →
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group border-none rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-0 overflow-hidden bg-gray-50 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/images/functional-edited.jpg"
                alt="Material"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-3 text-slate-800">기능성 고부가가치 물질</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                천연 소재에서 추출한 바이오활성 물질로 
                의약 및 기능성 식품 원료를 개발합니다.
              </p>
              <a href="#" className="mt-auto font-bold text-slate-600 hover:text-slate-800">
                기술 상세 보기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*----------------------------------------------------------
        5️⃣ CONTACT
      -----------------------------------------------------------*/}
      <section id="contact" className="scroll-mt-24 py-24 px-4 md:px-16 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">함께 미래를 그려볼까요?</h2>
          <p className="text-center text-slate-400 mb-12">궁금한 점이 있다면 언제든 메시지를 남겨주세요.</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="name"
                placeholder="성함"
                required
                className="w-full bg-slate-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <input
                name="email"
                type="email"
                placeholder="이메일 주소"
                required
                className="w-full bg-slate-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              placeholder="궁금한 내용이나 협업 제안을 적어주세요."
              required
              className="w-full bg-slate-800 border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.01]"
            >
              메시지 보내기
            </button>
            {status && <p className="mt-4 text-center font-medium animate-pulse">{status}</p>}
          </form>
        </div>
      </section>

      {/*----------------------------------------------------------
        6️⃣ FOOTER
      -----------------------------------------------------------*/}
      <footer className="py-10 text-center text-sm bg-black text-gray-500">
        © 2010 - {new Date().getFullYear()} Bio-Energy Research Center (Celltebah × JNU)
      </footer>
    </main>
  );
}
