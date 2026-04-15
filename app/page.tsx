// app/page.tsx
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* 배경 효과 (나중에 이미지로 교체 가능) */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-green-500 to-emerald-900" />
        
        <div className="relative z-10 text-center px-4">
          <h2 className="text-green-400 font-semibold mb-4 tracking-wider">Sustainable Future</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            탄소중립의 해답, <br />
            <span className="text-green-400">바이오에너지</span>가 미래입니다
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            바이오에너지는 화석연료를 대체하고 지구 온난화를 멈출 수 있는 가장 현실적인 대안입니다. 
            우리 연구소는 지속 가능한 에너지 생태계를 연구합니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold transition shadow-lg">
              상담 문의하기
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold transition">
              기술 상세 보기
            </button>
          </div>
        </div>
      </section>

      {/* 여기에 연구소 소개, 기술 현황 섹션들이 추가될 예정입니다 */}
    </div>
  );
}
