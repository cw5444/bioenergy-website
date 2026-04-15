// app/page.tsx 예시
export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="...">...</section>

      {/* 연구소 소개 섹션 (ID 추가) */}
      <section id="intro" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Nature-Positive Innovation</h2>
          {/* 생략 */}
        </div>
      </section>

      {/* 핵심 기술 섹션 (ID 추가) */}
      <section id="tech" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Core Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {/* SectionCard 들이 들어가는 곳 */}
          </div>
        </div>
      </section>
    </main>
  );
}
