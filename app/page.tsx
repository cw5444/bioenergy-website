import Image from "next/image";
import { useState } from "react";

/*--------------------------------------------------------------
  Helper: simple fetch wrapper for the Supabase contact endpoint
--------------------------------------------------------------*/
async function submitContact(formData: FormData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("전송에 실패했습니다.");
}

/*--------------------------------------------------------------
  Main Page Component
--------------------------------------------------------------*/
export default function HomePage() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("보내는 중…");
    const formData = new FormData(e.currentTarget);
    try {
      await submitContact(formData);
      setStatus("✅ 메시지를 잘 보냈어요! 곧 답변드릴게요.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("❗ 전송에 실패했어요. 다시 시도해 주세요.");
    }
  };

  return (
    <main className="font-sans text-gray-900">
      {/*----------------------------------------------------------
        1️⃣ HERO – “Celltebah × JNU”
      -----------------------------------------------------------*/}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950 text-white p-8"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Celltebah × 전남대학교 바이오에너지연구소
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          농업 부산물로 친환경 바이오에탄올과 고활성 효소를 만들며,
          <br />
          지속가능한 미래 에너지와 고부가가치 바이오소재를 연구합니다.
        </p>
        <a
          href="#intro"
          className="mt-8 px-6 py-3 bg-white text-green-800 rounded-full hover:bg-gray-100 transition"
        >
          연구소 소개 보기 →
        </a>
      </section>

      {/*----------------------------------------------------------
        2️⃣ INTRODUCTION – Friendly tone
      -----------------------------------------------------------*/}
      <section
        id="intro"
        className="scroll-mt-24 py-16 px-4 md:px-16 bg-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          안녕! 우리는 바이오에너지연구소에요
        </h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          전 세계가 화석연료를 대체할 지속가능한 에너지를 찾는 요즘,
          우리 연구소는 농업‑부산물을 활용한 바쁜 ‘바이오 공장’으로
          변신하고 있어요.  <br />
          <strong>무엇을 할까?</strong> <br />
          • 농업 부산물에서 <em>바이오에탄올</em>을 뽑아내는 전처리·당화·발효 기술 <br />
          • 고활성 <em>셀룰라제 효소</em>를 대량 생산하는 ‘Molecular Farming’ <br />
          • 바이오‑활성 물질을 찾아 <em>헬스·식품·의료</em>까지 확대하는 연구
          <br />
          <br />
          2008년에 설립돼 지금은 10년 이상 연속으로 정부·산업·해외 기관과
          공동 연구를 진행하고 있답니다. <strong>우리와 함께 친환경 미래를 만든다</strong>는
          생각, 어떠세요?
        </p>
      </section>

      {/*----------------------------------------------------------
        3️⃣ TIMELINE – Research History
      -----------------------------------------------------------*/}
      <section
        id="timeline"
        className="scroll-mt-24 py-16 px-4 md:px-16 bg-gray-50"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          연구소 연혁 (친근하게 한눈에!)
        </h2>
        <ul className="max-w-4xl mx-auto space-y-6">
          {/* 2006 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2006‑06</span>
            <p>바이오에탄올 파일럿 플랜트 제작 지원 예정 (Phyto Farm & Gene)</p>
          </li>
          {/* 2007 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2007‑08</span>
            <p>연구소 설립 신청</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2007‑11</span>
            <p>연구소 설립 승인 – “바이오에너지연구소” 탄생!</p>
          </li>
          {/* 2008 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2008‑01</span>
            <p>전남대 농업생명과학대학 3호관에 연구소 개소·온실 건축</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2008‑04</span>
            <p>㈜바이텍코리아와 MOU 체결 (5백만원 규모)</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2008‑04</span>
            <p>Phyto Farm & Gene(연간 2억 원) 설립·지원 시작</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2008‑05</span>
            <p>베트남 호치민 바이오테크센터와 MOU 체결</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2008‑06</span>
            <p>전남대 특성화 연구소 지정 (연 1억 원, 5년)</p>
          </li>
          {/* 2009 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑01</span>
            <p>국제 심포지움 “Bio‑Energy & Technology” 개최</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑03</span>
            <p>제2차 “Cellulosic Bio‑Energy” 심포지움 개최</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑03</span>
            <p>UT Dallas와 공동 바이오에너지 개발 연구 시작</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑05</span>
            <p>Okayama University와 공동 연구 협의</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑07~05‑10</span>
            <p>인도 SPU와 공동 연구 체결 (2년간 진행)</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑06</span>
            <p>Bio‑TEM(투과형 전자현미경) 구입</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2009‑07</span>
            <p>머니투데이 “신성장동력 우수기업” 인증 획득</p>
          </li>
          {/* 2010 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2010‑02</span>
            <p>산학연 프로그램 운영 (BK21 목질자원 고도이용)</p>
          </li>
          {/* 2011 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2011‑06</span>
            <p>파일럿 플랜트 제작 지원 예정 (Phyto Farm & Gene)</p>
          </li>
          {/* 2012 */}
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2012‑02</span>
            <p>파일럿 플랜트 설계 완료</p>
          </li>
          <li className="flex items-start">
            <span className="w-20 font-mono text-green-700">2012‑04</span>
            <p>파일럿 플랜트 건설 완료 – 실증 단계 진입</p>
          </li>
        </ul>
      </section>

      {/*----------------------------------------------------------
        4️⃣ RESEARCH STATUS – “Shop” style cards
      -----------------------------------------------------------*/}
      <section
        id="status"
        className="scroll-mt-24 py-16 px-4 md:px-16 bg-white"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">
          현재 진행 중인 연구 (친근하게 한눈에!)
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Card 1 – Bio‑Ethanol */}
          <div className="border rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col">
            <Image
              src="/images/bioethanol.jpg"
              alt="Bio‑Ethanol"
              width={400}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">바이오에탄올 생산</h3>
            <p className="flex-1 text-sm">
              농업 부산물을 전처리·당화·발효해 친환경 에탄올을 만들어요.
              파일럿 플랜트가 현재 시범 운전 중입니다.
            </p>
            <a
              href="#"
              className="mt-4 text-green-700 hover:underline self-start"
            >
              더 알아보기 →
            </a>
          </div>

          {/* Card 2 – Enzyme */}
          <div className="border rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col">
            <Image
              src="/images/enzyme.jpg"
              alt="High‑Activity Enzyme"
              width={400}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">고활성 가수분해 효소</h3>
            <p className="flex-1 text-sm">
              식물 기반 ‘Molecular Farming’ 으로 셀룰라제·시놀리제 효소를
              저렴하게 대량 생산, 바이오에너지 산업의 핵심 비용을 절감합니다.
            </p>
            <a
              href="#"
              className="mt-4 text-green-700 hover:underline self-start"
            >
              더 알아보기 →
            </a>
          </div>

          {/* Card 3 – Functional Materials */}
          <div className="border rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col">
            <Image
              src="/images/functional.jpg"
              alt="Functional High‑Value Materials"
              width={400}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">고부가가치 기능성 물질</h3>
            <p className="flex-1 text-sm">
              농업 부산물에서 추출한 바이오액티브 화합물로
              nutraceutical·의약·화장품 원료를 개발하고 있어요.
            </p>
            <a
              href="#"
              className="mt-4 text-green-700 hover:underline self-start"
            >
              더 알아보기 →
            </a>
          </div>
        </div>
      </section>

      {/*----------------------------------------------------------
        5️⃣ CONTACT – Supabase‑linked form (restored)
      -----------------------------------------------------------*/}
      <section
        id="contact"
        className="scroll-mt-24 py-16 px-4 md:px-16 bg-gray-100"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          함께 얘기해볼까요? 📧
        </h2>
        <form
          className="max-w-xl mx-auto space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              이름
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              메세지
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            보내기
          </button>
          {status && <p className="mt-3 text-center">{status}</p>}
        </form>
      </section>

      {/*----------------------------------------------------------
        6️⃣ FOOTER – Dynamic year range
      -----------------------------------------------------------*/}
      <footer className="py-6 text-center text-sm bg-gray-800 text-gray-300">
        © 2010 - {new Date().getFullYear()} 바이오에너지연구소 (Celltebah × JNU)
      </footer>
    </main>
  );
}
