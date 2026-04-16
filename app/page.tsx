// app/page.tsx (Hero 부분만 교체)
<section id="intro" className="relative min-h-screen flex items-center justify-center bg-[#050a0f] overflow-hidden">
  {/* 배경 효과: 단순 그라데이션 대신 생동감 있는 빛무리 추가 */}
  <div className="absolute inset-0">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/30 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-900/20 rounded-full blur-[120px]" />
  </div>
  
  <div className="relative z-10 text-center px-4 max-w-5xl mt-20"> {/* Header 높이만큼 여백 추가 */}
    <div className="inline-block px-4 py-1.5 mb-8 border border-green-500/30 rounded-full bg-green-500/5 backdrop-blur-xl">
      <span className="text-green-400 font-bold tracking-[0.2em] uppercase text-[11px]">
        Chonnam National University · BRC
      </span>
    </div>
    
    <h1 className="text-6xl md:text-9xl font-black text-white mb-10 leading-[1] tracking-tighter">
      <span className="text-3xl md:text-4xl font-light text-slate-400 block mb-4">탄소중립의 해답,</span>
      <span className="bg-gradient-to-b from-white via-white to-green-500 bg-clip-text text-transparent">
        바이오에너지
      </span>
    </h1>
    
    <p className="text-lg md:text-2xl text-slate-400 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
      국립 전남대학교 <span className="text-white font-semibold">바이오에너지연구소</span>는 <br/>
      지속 가능한 미래를 위한 <span className="text-green-400">혁신적 에너지 솔루션</span>을 연구합니다.
    </p>

    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <Link href="/contact" className="group relative bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all overflow-hidden">
        <span className="relative z-10">지금 상담하기</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </Link>
      <Link href="#tech" className="text-slate-300 hover:text-white border-b border-slate-700 hover:border-green-500 pb-1 transition-all text-lg font-medium">
        연구 기술 더보기 →
      </Link>
    </div>
  </div>
</section>
