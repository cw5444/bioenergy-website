import SectionCard from "@/components/SectionCard";

export default function Home() {
  return (
    <div>
      {/* ==== Hero ==== */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-green-500 to-emerald-900" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-green-400 font-semibold mb-4 tracking-wider">
            Sustainable Future
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            탄소중립의 해답, <br />
            <span className="text-green-400">바이오에너지</span>가 미래입니다
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            바이오에너지는 화석연료를 대체하고 지구 온난화를 멈출 수 있는 가장 현실적인 대안입니다.
            우리 연구소는 지속 가능한 에너지 생태계를 연구합니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
            >
              상담 문의하기
            </a>
            <a
              href="#tech"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold transition"
            >
              기술 상세 보기
            </a>
          </div>
        </div>
      </section>

      {/* ==== 연구소 소개 (Intro) ==== */}
      <section id="intro" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            연구소 소개
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            2015년에 설립된 바이오에너지연구소는 친환경 연료·바이오매스·해양 바이오
            에너지 분야에서 국가·산업·학계와 협업해 온 경험이 풍부합니다.
          </p>
        </div>
      </section>

      {/* ==== 기술 현황 (Tech) ==== */}
      <section id="tech" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
            주요 기술·제품
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionCard
              title="바이오디젤"
              description="식물성 오일을 원료로 한 저탄소 디젤 연료"
              icon="🚜"
            />
            <SectionCard
              title="바이오가스"
              description="폐기물 혐기성 소화를 통한 청정 가스 생산"
              icon="💨"
            />
            <SectionCard
              title="바이오플라스틱"
              description="생분해가 가능한 친환경 플라스틱 소재"
              icon="♻️"
            />
          </div>
        </div>
      </section>

      {/* ==== Contact Call‑to‑Action (앵커) ==== */}
      <section id="contact" className="py-20 bg-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            궁금한 점이 있나요?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            프로젝트 협업·기술 상담·투자 문의는 언제든 환영합니다.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            문의하기
          </a>
        </div>
      </section>
    </div>
  );
}
