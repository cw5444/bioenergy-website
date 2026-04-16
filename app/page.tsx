"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else { setStatus("error"); }
    } catch (err) { setStatus("error"); }
  };

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section */}
      <section id="intro" className="relative h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-green-400/30 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-300 font-bold tracking-widest uppercase text-xs">National University Research Institute</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            <span className="text-4xl md:text-5xl font-light opacity-90 block mb-2">탄소중립의 해답,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300">바이오에너지</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-normal max-w-3xl mx-auto">
            국립 전남대학교 <span className="font-bold text-white underline underline-offset-4 decoration-green-500">바이오에너지연구소(BRC)</span>는 <br className="hidden md:block" />
            자연에서 얻은 에너지를 인류의 지속 가능한 미래로 바꿉니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#contact" className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)]">지금 상담하기</Link>
            <Link href="#tech" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold transition-all">기술현황 보기</Link>
          </div>
        </div>
      </section>

      {/* 2. Tech Section */}
      <section id="tech" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Our Technology</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">핵심 연구 분야</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "바이오매스 발전", desc: "미활용 산림 자원을 이용한 친환경 전력 생산 기술을 연구합니다.", icon: "🌱" },
              { title: "그린 수소 생산", desc: "바이오 가스를 개질하여 순도 높은 수소를 저비용으로 생산합니다.", icon: "💧" },
              { title: "탄소 포집(CCUS)", desc: "에너지 생산 과정에서 발생하는 탄소를 포획하여 자원화합니다.", icon: "⚡" },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-green-200 transition-all group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-green-700 transition-colors uppercase">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Research Status Section (미리 확보) */}
      <section id="status" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Research Status</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">주요 연구 및 사업 현황</h3>
            <p className="mt-4 text-slate-500">현재 진행 중인 국책 과제 및 산학 협력 리스트가 업데이트될 예정입니다.</p>
          </div>
          <div className="h-64 border-2 border-dashed border-slate-200 rounded-[2rem] flex items-center justify-center text-slate-400">
            연구 현황 데이터 로딩 중...
          </div>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">프로젝트 문의하기</h2>
              <p className="text-slate-600 font-medium">실현 가능한 친환경 에너지를 함께 논의합니다.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">성함/기관명</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-green-500 outline-none transition-all text-slate-900" placeholder="홍길동 / 전남대학교" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">이메일 주소</label>
                  <input type="email" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-green-500 outline-none transition-all text-slate-900" placeholder="example@jnu.ac.kr" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">문의 내용</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-green-500 outline-none transition-all text-slate-900" placeholder="협업 제안이나 기술 문의 내용을 입력해 주세요." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-xl font-bold transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]">
                {status === "sending" ? "전송 중..." : "전송하기"}
              </button>
              {status === "success" && <p className="text-center text-green-600 font-bold">성공적으로 발송되었습니다!</p>}
              {status === "error" && <p className="text-center text-red-500 font-bold">오류가 발생했습니다. 다시 시도해 주세요.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
