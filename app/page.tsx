"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// 구글 번역 API 타입 선언
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function Home() {
  /* ---------- 상태 관리 ---------- */
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"ko" | "en">("ko");

  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

  /* ---------- 구글 번역 엔진 초기화 ---------- */
  useEffect(() => {
    // 구글 번역 스크립트 삽입
    const addScript = document.createElement("script");
    addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ko",
          includedLanguages: "en,ko,ja,zh-CN,es,fr,de",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // 번역 실행 함수
  const handleTranslate = (langCode: "ko" | "en") => {
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode === "ko" ? "" : "en"; // 구글은 원본언어로 갈 때 빈값을 사용하기도 함
      selectEl.dispatchEvent(new Event("change"));
      setCurrentLang(langCode);
    }
  };

  /* ---------- 외부 클릭/터치 시 메뉴 닫기 ---------- */
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (!isMenuOpen) return;
      const target = e.target as Node;
      if (menuRef.current?.contains(target)) return;
      if (hamburgerRef.current?.contains(target)) return;
      setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => { if (isMenuOpen) setIsMenuOpen(false); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else { setStatus("error"); }
    } catch (err) { setStatus("error"); }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* 구글 번역기 숨김 자동 실행용 */}
      <div id="google_translate_element" className="hidden"></div>

      {/* ==================== 0️⃣ Header ==================== */}
      <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex flex-col leading-tight" onClick={() => {window.scrollTo({top:0, behavior:'smooth'}); setIsMenuOpen(false);}}>
              <span className="text-2xl font-black tracking-tighter text-slate-900">Celltebah</span>
              <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">Bioenergy Research Center</span>
            </Link>
            <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block" />
            <a href="https://www.jnu.ac.kr" target="_blank" rel="noopener noreferrer" className="relative h-7 w-32 hidden sm:block">
              <Image src="/images/jnu-logo.svg" alt="전남대학교" fill className="object-contain opacity-80" unoptimized />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-slate-600">
            <Link href="#intro" className="hover:text-green-600 transition-colors">연구소 소개</Link>
            <Link href="#timeline" className="hover:text-green-600 transition-colors">연혁</Link>
            <Link href="#status" className="hover:text-green-600 transition-colors">연구 현황</Link>
            <Link href="#product" className="hover:text-green-600 transition-colors">주요 제품</Link>
            <Link href="#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-500 transition-all shadow-md">문의하기</Link>
          </div>

          <button ref={hamburgerRef} className="md:hidden flex flex-col gap-1.5 z-[110]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isMenuOpen ? "rotate-45 translate-y-2 !bg-white" : ""}`} />
            <div className={`w-6 h-0.5 bg-slate-900 ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2 !bg-white" : ""}`} />
          </button>
        </nav>
      </header>

      {/* ─── 언어 선택 플로팅 바 (헤더 아래 우측) ─── */}
      <div className="fixed top-24 right-6 z-[90] flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-xl border border-slate-200">
        {currentLang === "en" && (
          <button onClick={() => handleTranslate("ko")} className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-xl transition-all">
            <span className="text-lg">🇰🇷</span>
            <span className="text-xs font-bold text-slate-700">KR</span>
          </button>
        )}
        {currentLang === "ko" && (
          <button onClick={() => handleTranslate("en")} className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-xl transition-all">
            <span className="text-lg">🇺🇸</span>
            <span className="text-xs font-bold text-slate-700">EN</span>
          </button>
        )}
        <div className="w-[1px] h-4 bg-slate-200 mx-1" />
        <button onClick={() => {(document.querySelector(".goog-te-menu-value") as HTMLElement)?.click()}} className="flex items-center gap-2 px-3 py-1.5 hover:bg-slate-100 rounded-xl transition-all">
          <span className="text-lg">🌐</span>
          <span className="text-xs font-bold text-slate-700">ETC</span>
        </button>
      </div>

      {/* ==================== 1️⃣ Hero ==================== */}
      <section id="intro" className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-12 scroll-mt-20">
        <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-green-400/30 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-300 font-bold tracking-widest uppercase text-xs">Sustainable Future</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.2] tracking-tight">
            탄소중립의 해답,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300">바이오에너지가 미래입니다</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            바이오에너지는 화석연료를 대체하는 가장 현실적인 대안입니다.<br className="hidden md:block" />
            우리 연구소는 지속 가능한 에너지와 고부가가치 소재 생태계를 연구합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#status" className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-lg">연구 현황</Link>
            <Link href="#product" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold transition-all">주요 제품</Link>
          </div>
        </div>
      </section>

      {/* ==================== 2️⃣ Timeline ==================== */}
      <section id="timeline" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">History</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">주요 연혁</h3>
          </div>
          <div className="space-y-12">
            {[
              { year: "2006", content: "전남대학교와 산학협력 MOU 체결 및 바이오에너지 연구 기반 구축" },
              { year: "2007", content: "차세대 바이오에탄올 생산 기술 Pilot Plant 설계 완료" },
              { year: "2008", content: "전남대학교 농생대 3호관 연구소 개소 및 파일럿 플랜트 가동" },
              { year: "2010", content: "고활성 효소 공동 연구 및 국제 바이오에너지 심포지엄 개최" },
              { year: "2012", content: "기능성 바이오 소재 추출 공정 특허 출원 및 상용화 기술 확보" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start border-l-4 border-green-500 pl-8 relative">
                <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[10px] top-1" />
                <span className="text-2xl font-black text-green-700 w-24 shrink-0">{item.year}</span>
                <p className="text-xl text-slate-700 font-medium pt-0.5">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3️⃣ Research Status ==================== */}
      <section id="status" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Research Status</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 border-b-4 border-green-600 inline-block pb-2">연구 현황</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Bio‑Ethanol", desc: "고효율 바이오에탄올 생산 공정 최적화 및 상용화 연구", img: "/images/bioethanol-edited.jpg" },
              { title: "High‑Activity Enzymes", desc: "바이오매스 분해 효율 극대화를 위한 고활성 효소 칵테일 개발", img: "/images/enzyme-edited.jpg" },
              { title: "Functional Materials", desc: "바이오 공정 부산물을 활용한 고부가가치 기능성 소재 추출", img: "/images/functional-edited.jpg" },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer" onClick={() => setSelectedImg(item.img)}>
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
                  <div className="absolute bottom-0 p-8 w-full transition-transform duration-500">
                    <div className="mb-3 w-10 h-1 bg-green-500 rounded-full group-hover:w-20 transition-all duration-500" />
                    <h4 className="text-2xl font-bold mb-3 text-white tracking-tight">{item.title}</h4>
                    <p className="text-slate-300 leading-relaxed font-medium text-sm opacity-90">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4️⃣ Product ==================== */}
      <section id="product" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Main Business</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-8">주요 제품 및 사업</h3>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            일반적으로 생산이 어렵거나 고가인 <span className="text-green-700 font-bold underline">MOS, XOS, COS</span> 등의 기능성 소재를 바이오매스를 활용하여 <span className="text-slate-900 font-bold uppercase">소량 주문 생산 및 판매</span>를 진행하고 있습니다.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { name: "MOS", desc: "면역력 강화 및 장내 환경 개선에 탁월한 프리바이오틱스 소재입니다." },
              { name: "XOS", desc: "자일로올리고당 기반의 고부가가치 천연 소재로 활용도가 높습니다." },
              { name: "COS", desc: "생산 난도가 매우 높은 키토올리고당을 독자 기술로 맞춤 제작합니다." }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all border-b-4 hover:border-green-500">
                <div className="text-4xl font-black text-green-600 mb-4">{p.name}</div>
                <p className="text-slate-600 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이미지 확대 모달 */}
      {selectedImg && (
        <div className="fixed inset-0 z-[1000] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setSelectedImg(null)}>
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] drop-shadow-2xl">
            <Image src={selectedImg} alt="Full view" fill className="object-contain" unoptimized />
          </div>
          <button className="absolute top-8 right-8 text-white bg-slate-800/50 w-12 h-12 rounded-full flex items-center justify-center text-3xl font-light hover:bg-slate-700 transition-all">&times;</button>
        </div>
      )}

      {/* ==================== 5️⃣ Inquiry ==================== */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Inquiry</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">문의하기</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="성함 또는 기관명" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-green-500 transition-all text-slate-900 bg-slate-50/50" />
              <input type="email" placeholder="이메일 주소" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-green-500 transition-all text-slate-900 bg-slate-50/50" />
            </div>
            <textarea rows={5} placeholder="문의 내용을 입력해 주세요." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-green-500 transition-all text-slate-900 bg-slate-50/50" />
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl text-xl font-bold transition-all shadow-lg active:scale-95" type="submit">
              {status === "sending" ? "전송 중..." : "문의 메시지 보내기"}
            </button>
            {status === "success" && <p className="text-center text-green-600 font-black">정상적으로 전송되었습니다.</p>}
            {status === "error" && <p className="text-center text-red-500 font-bold">오류가 발생했습니다.</p>}
          </form>
        </div>
      </section>

      {/* 모바일 메뉴 오버레이 */}
      <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100] transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMenuOpen(false)}>
        <div ref={menuRef} className={`absolute right-0 top-0 h-screen w-[270px] bg-slate-900/95 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} p-8 flex flex-col pt-32`} onClick={(e) => e.stopPropagation()}>
          <Link href="#intro" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>연구소 소개</Link>
          <Link href="#timeline" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>연혁</Link>
          <Link href="#status" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>연구 현황</Link>
          <Link href="#product" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>주요 제품</Link>
          <Link href="#contact" className="text-2xl font-bold text-green-400 pt-4" onClick={() => setIsMenuOpen(false)}>문의하기</Link>
        </div>
      </div>

      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm font-medium">© 2026 Celltebah Bioenergy Research Center. Chonnam National University.</p>
      </footer>

      {/* 구글 번역 지저분한 툴바 숨기기 */}
      <style jsx global>{`
        .goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
        .goog-te-balloon-frame { display: none !important; }
      `}</style>
    </main>
  );
}
