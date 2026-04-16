import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section id="intro" className="relative h-[95vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
        {/* 생동감 넘치는 그린 에너지 배경 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-600/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <div className="inline-block px-4 py-1.5 mb-8 border border-green-400/30 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-400 font-bold tracking-[0.2em] uppercase text-xs">
              National University Research Institute
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            <span className="text-3xl md:text-5xl font-light opacity-80 block mb-4">탄소중립의 해답,</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300">
              바이오에너지
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-14 leading-relaxed font-normal max-w-3xl mx-auto">
            국립 전남대학교 <span className="font-bold text-white underline underline-offset-8 decoration-green-500/50">바이오에너지연구소(BRC)</span>는 <br className="hidden md:block" />
            자연에서 얻은 에너지를 인류의 지속 가능한 미래로 바꿉니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-[0_0_40px_rgba(22,163,74,0.3)]">
              지금 상담하기
            </Link>
            <Link href="#tech" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold transition-all transition-transform hover:scale-105">
              기술현황 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Tech Section */}
      <section id="tech" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-green-700 font-bold mb-3 uppercase tracking-[0.3em] text-sm">Our Technology</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">핵심 연구 분야</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "바이오매스 발전", desc: "미활용 산림 자원을 이용한 친환경 전력 생산 기술을 연구합니다.", icon: "🌱" },
              { title: "그린 수소 생산", desc: "바이오 가스를 개질하여 순도 높은 수소를 저비용으로 생산합니다.", icon: "💧" },
              { title: "탄소 포집(CCUS)", desc: "에너지 생산 과정에서 발생하는 탄소를 포획하여 자원화합니다.", icon: "⚡" },
            ].map((item, idx) => (
              <div key={idx} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-2xl hover:shadow-green-900/5 transition-all group">
                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-green-700 transition-colors">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
