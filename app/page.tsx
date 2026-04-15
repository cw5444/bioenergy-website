import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section: 그라데이션 핵심 */}
      <section id="intro" className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* 그라데이션 오버레이 */}
        <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-green-500 via-emerald-700 to-slate-900" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-green-400 font-bold mb-4 tracking-widest uppercase text-sm">Sustainable Energy Leader</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
            탄소중립의 해답, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              바이오에너지
            </span>가 미래입니다
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
            화석연료를 대체하고 지구 온난화를 멈출 수 있는 가장 현실적인 대안. <br className="hidden md:block" />
            우리 연구소는 자연에서 얻은 에너지를 인류의 희망으로 바꿉니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full font-xl font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              지금 상담하기
            </Link>
            <Link href="#tech" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-10 py-4 rounded-full font-xl font-bold transition-all">
              기술현황 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Tech Section */}
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
