// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section: 글자 크기 및 신뢰성 문구 강화 */}
      <section id="intro" className="relative h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          {/* 국립대 공신력 태그 */}
          <div className="inline-block px-4 py-1.5 mb-6 border border-green-400/30 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-300 font-bold tracking-widest uppercase text-xs">
              National University Research Institute
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            <span className="text-4xl md:text-5xl font-light opacity-90 block mb-2">탄소중립의 해답,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300">
              바이오에너지
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed font-normal max-w-3xl mx-auto">
            국립 전남대학교 <span className="font-bold text-white underline underline-offset-4 decoration-green-500">바이오에너지연구소(BRC)</span>는 <br className="hidden md:block" />
            자연에서 얻은 에너지를 인류의 지속 가능한 미래로 바꿉니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)]">
              지금 상담하기
            </Link>
            <Link href="#tech" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold transition-all">
              기술현황 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Tech Section (변동 없음) */}
      <section id="tech" className="py-24 bg-white">
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
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-green-200 transition-colors group">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-green-700 transition-colors">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
