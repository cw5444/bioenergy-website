// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* ────────────────────── HERO SECTION ────────────────────── */}
      <section
        id="intro"
        className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden"
      >
        {/* 배경 그라데이션 – primary 색상 사용 */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-primary to-primary-800" />

        <div className="relative z-10 text-center px-4">
          <h2 className="text-primary-400 font-semibold mb-4 tracking-wider">
            Sustainable Future
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            탄소중립의 해답, <br />
            <span className="text-primary-400">바이오에너지</span>가 미래입니다
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            바이오에너지는 화석연료를 대체하고 지구 온난화를 멈출 수 있는 가장
            현실적인 대안입니다. 우리 연구소는 지속 가능한 에너지 생태계를
            연구합니다.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* 상담 문의 → Contact 페이지 */}
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
            >
              상담 문의하기
            </Link>

            {/* 기술 상세 보기 → 페이지 내부 #tech 앵커 */}
            <Link
              href="/#tech"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold transition"
            >
              기술 상세 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────── INTRODUCTION (연구소 소개) ────────────────────── */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            연구소 소개
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            바이오에너지연구소는 친환경 바이오연료, 바이오가스, 폐기물 활용
            기술 등을 연구·개발하는 선도적인 기관입니다. 탄소중립 목표 달성을
            위해 국내·외 다양한 파트너와 협업하고 있습니다.
          </p>
        </div>
      </section>

      {/* ────────────────────── TECHNOLOGY SECTION ────────────────────── */}
      <section
        id="tech"
        className="py-20 bg-slate-50 border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            기술 현황
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 예시 카드 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-2">
                바이오 연료
              </h3>
              <p className="text-slate-600">
                농업·산림 폐기물을 원료로 한 고효율 바이오 연료 개발
                프로젝트를 진행 중이며, 현재 파일럿 플랜트를 운영하고 있습니다.
              </p>
            </div>

            {/* 예시 카드 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-2">
                바이오 가스
              </h3>
              <p className="text-slate-600">
                유기 폐기물·음식물 쓰레기에서 발생하는 메탄을 회수·정제하는
                기술을 상용화 단계에 올렸습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── CONTACT SECTION (앵커용) ────────────────────── */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            문의하기
          </h2>
          <p className="text-slate-600 mb-8">
            궁금한 점이나 협업 제안이 있으면 아래 폼을 작성해 주세요.
          </p>

          {/* ContactForm 컴포넌트를 여기서 바로 사용해도 되고, 별도 페이지(/contact)에서도 OK */}
          {/* <ContactForm /> */}
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            문의 폼 바로 이동
          </Link>
        </div>
      </section>
    </div>
  );
}
