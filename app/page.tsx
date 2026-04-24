"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  /* ---------- Contact Form State ---------- */
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  /* ---------- Image Modal State ---------- */
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ==================== 1️⃣ Hero ==================== */}
      <section
        id="intro"
        className="relative h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-green-400/30 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-300 font-bold tracking-widest uppercase text-xs">
              Sustainable Future
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.2] tracking-tight">
            탄소중립의 해답,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300">
              바이오에너지가 미래입니다
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            바이오에너지는 화석연료를 대체하고 지구 온난화를 멈출 수 있는 가장 현실적인 대안입니다.
            <br className="hidden md:block" />
            우리 연구소는 지속 가능한 에너지 생태계를 연구합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#contact"
              className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              문의하기
            </Link>
            <Link
              href="#timeline"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold transition-all"
            >
              연혁 확인하기
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== 2️⃣ Timeline ==================== */}
      <section id="timeline" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">
              History
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              주요 연혁
            </h3>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2006",
                content: "전남대학교와 산학협력 MOU 체결 및 바이오에너지 연구 기반 구축",
              },
              {
                year: "2007",
                content: "차세대 바이오에탄올 생산 기술 Pilot Plant 설계 완료",
              },
              {
                year: "2008",
                content:
                  "전남대학교 **농생대 3호관** 연구소 개소 및 파일럿 플랜트 가동",
              },
              {
                year: "2010",
                content:
                  "고활성 효소 공동 연구 및 국제 바이오에너지 심포지엄 개최",
              },
              {
                year: "2012",
                content:
                  "기능성 바이오 소재 추출 공정 특허 출원 및 상용화 기술 확보",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-8 items-start border-l-4 border-green-500 pl-8 relative"
              >
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[10px] top-1" />
                <span className="text-2xl font-black text-green-700 w-24 shrink-0">
                  {item.year}
                </span>
                <p className="text-xl text-slate-700 font-medium pt-0.5">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3️⃣ Research Status ==================== */}
      <section id="status" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">
              Research Status
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900 border-b-4 border-green-600 inline-block pb-2">
              연구 현황
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Bio‑Ethanol",
                desc: "고효율 바이오에탄올 생산 공정 최적화 및 상용화 연구",
                img: "/images/bioethanol-edited.jpg",
              },
              {
                title: "High‑Activity Enzymes",
                desc: "바이오매스 분해 효율 극대화를 위한 고활성 효소 칵테일 개발",
                img: "/images/enzyme-edited.jpg",
              },
              {
                title: "Functional Materials",
                desc: "바이오 공정 부산물을 활용한 고부가가치 기능성 소재 추출",
                img: "/images/functional-edited.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer"
                onClick={() => setSelectedImg(item.img)}
              >
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
                  <div className="absolute bottom-0 p-8 w-full transform transition-transform duration-500">
                    <div className="mb-3 w-10 h-1 bg-green-500 rounded-full group-hover:w-20 transition-all duration-500" />
                    <h4 className="text-2xl font-bold mb-3 text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed font-medium text-sm opacity-90">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 확대 모달 (배경: 짙은 회색 + 블러 적용) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[1000] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-5xl h-full max-h-[85vh]">
            <Image
              src={selectedImg}
              alt="Full view"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <button className="absolute top-8 right-8 text-white text-4xl font-light hover:text-green-500 transition-colors">
            &times;
          </button>
        </div>
      )}

      {/* ==================== 4️⃣ Inquiry (문의하기 섹션으로 개선) ==================== */}
      <section id="contact" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">
              Inquiry
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              문의하기
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-black text-slate-700 mb-2 uppercase">
                  Name / Organization
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-green-500 outline-none transition-all text-slate-900"
                  placeholder="성함 또는 기관명"
                />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-700 mb-2 uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-green-500 outline-none transition-all text-slate-900"
                  placeholder="example@domain.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-slate-700 mb-2 uppercase">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-white border border-slate-200 focus:border-green-500 outline-none transition-all text-slate-900"
                placeholder="문의 내용을 입력해 주세요."
              />
            </div>

            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl text-xl font-bold transition-all shadow-lg"
              type="submit"
            >
              {status === "sending" ? "전송 중..." : "문의 메시지 보내기"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-600 font-black">
                정상적으로 전송되었습니다. 검토 후 연락드리겠습니다.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-500 font-bold">
                서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
