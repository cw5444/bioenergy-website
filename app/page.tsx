"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  /* ---------- 상태 관리 ---------- */
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState("all");

  // 외부 클릭/터치용 레퍼런스
  const menuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);

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
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
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
      } else setStatus("error");
    } catch (err) {
      setStatus("error");
    }
  };

  const products = [
    { id: "enz01", cat: "enzyme", name: "Cellulase", src: "Woody biomass, Agricultural waste, Textile waste", desc: "Industrial/Food Grade 효소 생산 라인. 다당류 분해 목적." },
    { id: "enz02", cat: "enzyme", name: "Pectinase", src: "Fruit/vegetable wastes, Onion, Cruciferous vegetable", desc: "펙틴 분해 효소 생산. 바이오슈가/정제 공정 연계 가능." },
    { id: "bio01", cat: "biosugar", name: "Mannose", src: "Onion, Cruciferous vegetable, Bamboo", desc: "효소 전환/당화 기반 단당류 라인." },
    { id: "bio02", cat: "biosugar", name: "Xylose", src: "Bamboo, Rice husk, Rice straw, Hardwoods, Softwoods", desc: "목질계/농산계 바이오매스 유래 당." },
    { id: "bio03", cat: "biosugar", name: "Glucose", src: "Onion, Bamboo, Rice husk, Rice straw, Paper, Textile waste, Woods, Agricultural waste", desc: "C6 당, 바이오에탄올/플랫폼 케미컬 전구체." },
    { id: "bio04", cat: "biosugar", name: "Fructose", src: "Onion, Mandarin, Cruciferous vegetable wastes", desc: "과당류, 식품/원료용 검토 가능." },
    { id: "bio05", cat: "biosugar", name: "Biosugar (혼합 당)", src: "Mannose, Xylose, Glucose, Fructose 조합", desc: "원료 소스에 따라 당 조성이 달라지는 당화 산물." },
    { id: "bioeth01", cat: "bioethanol", name: "Bioethanol", src: "Onion, Bamboo, Rice husk, Rice straw, Papers, Textile waste, Woods, Agricultural waste", desc: "다당류 당화 후 발효 기반 바이오연료 라인." },
    { id: "rare01", cat: "raresugar", name: "Allulose / Psicose", src: "Rice straw, Rice husk, Cruciferous vegetable wastes", desc: "희귀당 라인. 저칼로리 당 대체 검토." },
    { id: "rare02", cat: "raresugar", name: "Tagatose", src: "Agar", desc: "희귀당, Agar 유래 연계 검토." },
    { id: "rare03", cat: "raresugar", name: "Xylulose", src: "Bamboo", desc: "희귀당, 대나무계 원료 연계." },
    { id: "oligo01", cat: "oligo", name: "Manno-oligosaccharide (MOS)", src: "Locust bean Gum, Guar Gum, Konjac", desc: "프리바이오틱스/올리고당 계열 제품." },
    { id: "oligo02", cat: "oligo", name: "Xylo-oligosaccharide (XOS)", src: "Bamboo, Rice husk", desc: "목질계/농산계 유래 자일로올리고당 라인." },
    { id: "oligo03", cat: "oligo", name: "Chito-oligosaccharide (COS)", src: "Chitin/Chitosan 계열 원료", desc: "올리고당/기능성 소재 검토용." },
    { id: "plat01", cat: "platform", name: "Lactic acid", src: "Textile waste, Onion, Bamboo, Rice husk, Rice straw, Paper, Agricultural waste", desc: "플랫폼 케미컬, 생분해/발효 연계 원료." },
    { id: "plat02", cat: "platform", name: "Polyol – Sorbitol", src: "Onion", desc: "당 알코올 계열, Onion 연계 가능." },
    { id: "plat03", cat: "platform", name: "Polyol – Xylitol", src: "Bamboo", desc: "당 알코올 계열, Bamboo 연계 가능." },
    { id: "plat04", cat: "platform", name: "HMF", src: "Cellulose/Hemicellulose 유래 당, Bamboo, Rice husk, Rice straw 등", desc: "화학 전환 중간체, 플랫폼 화합물." },
    { id: "bioact01", cat: "bioactive", name: "Quercetin", src: "Onion, Cruciferous vegetable", desc: "플라보노이드계 바이오액티브." },
    { id: "bioact02", cat: "bioactive", name: "Concanavalin A (ConA)", src: "종자/콩과 유래 단백질 계열 검토", desc: "렉틴 계열 바이오액티브." },
    { id: "bioact03", cat: "bioactive", name: "Hesperidin", src: "Mandarin, Citrus 계열", desc: "플라바논 배당체 계열." },
    { id: "etc01", cat: "etc", name: "Bio-Pack", src: "제품 패키징/패키지 제안 라인", desc: "바이오 제품 연계 포장/패키지 구성 검토." },
  ];

  const filteredProducts =
    activeCat === "all"
      ? products
      : products.filter((p) => p.cat === activeCat);

  const categories = [
    { key: "all", label: "전체" },
    { key: "enzyme", label: "Enzyme Production" },
    { key: "biosugar", label: "Biosugar" },
    { key: "bioethanol", label: "Biofuel / Bioethanol" },
    { key: "raresugar", label: "Rare Sugars" },
    { key: "oligo", label: "Oligosaccharide (Prebiotics)" },
    { key: "platform", label: "Platform Chemicals" },
    { key: "bioactive", label: "Bioactive Compounds" },
    { key: "etc", label: "ETC" },
  ];

  /* ===== 우간다 커피 기획 섹션: JSX 밖 선언 ===== */
  const ugandaCards = [
    {
      title: "왜 우간다 커피인가",
      body: (
        <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <li><span className="font-semibold text-slate-900">생산 잠재력</span> 우간다는 로부스타 중심 생산국으로, 등급별 물량 편차가 뚜렷해 전량 활용 구조와 연결하기 좋음.</li>
          <li><span className="font-semibold text-slate-900">현지 파트너</span> 청년 일자리 창출을 목표로 하는 우간다 청년 리더와 협력 가능.</li>
          <li><span className="font-semibold text-slate-900">가격 환경</span> 현재 글로벌 커피가격이 고점 대비 내려온 구간이라, 저등급 원두의 현지 가공·활용 실험을 시도하기엔 부담이 덜한 국면.</li>
        </ul>
      ),
    },
    {
      title: "3가지 목표",
      body: (
        <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <li>
            <span className="font-semibold text-slate-900">1차: 우간다 청년 일자리</span>
            수매, 선별, 1차 가공, 포장, 오일 추출 보조 등 단계에 현지 인력을 배치해 고용 창출.
          </li>
          <li>
            <span className="font-semibold text-slate-900">2차: 유통 단축</span>
            중간 유통 단계를 줄여 우간다에서 한국으로의 직공급 구조를 만듦. 마진이 여러 단계에 분산되는 구조를 줄이고, 현지와 한국이 직접 연결되는 방식.
          </li>
          <li>
            <span className="font-semibold text-slate-900">3차: 원두 전량 활용</span>
            음용 적합 원두는 로스팅·음용 커피로, 음용으로 쓰기 어려운 저등급 원두나 부산물은 오일 추출 후 에너지·산업 소재로 활용하는 구조 검토.
          </li>
        </ul>
      ),
    },
    {
      title: "제품·활용 구조",
      body: (
        <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <li>
            <span className="font-semibold text-slate-900">음용 커피 라인</span>
            상위 등급 원두는 한국에서 로스팅·공급. B2B 카페 납품, 온라인 D2C, 브랜딩 스토리와 연결 가능.
          </li>
          <li>
            <span className="font-semibold text-slate-900">오일·에너지 활용 라인</span>
            저등급/불량 원두는 오일 추출 후 바이오디젤, 난방·보조연료, 연구용 시료, 산업 보조재 등 활용처를 함께 설계.
          </li>
          <li>
            <span className="font-semibold text-slate-900">커피박/부산물 활용</span>
            오일 추출 후 잔여물은 현지 연료, 퇴비, 추가 바이오매스 활용 등으로 연결해 “버리는 원두”를 줄이는 방향.
          </li>
        </ul>
      ),
    },
    {
      title: "현실적 접근: 파일럿 → 확대",
      body: (
        <ol className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <li>
            <span className="font-semibold text-slate-900">1단계</span>
            소량 생두/원두 직수입 + 한국 로스팅·소규모 판매로 소비자 반응 확인. 동시에 우간다에서 오일 추출 가능성과 품질 샘플 확보.
          </li>
          <li>
            <span className="font-semibold text-slate-900">2단계</span>
            반응이 확인되면 현지 가공·선별 역량 강화, 청년 고용 확대.
          </li>
          <li>
            <span className="font-semibold text-slate-900">3단계</span>
            오일 추출 라인 또는 커피박 활용 방안을 연구소 기술과 연결해 확장.
          </li>
        </ol>
      ),
    },
    {
      title: "핵심 포인트",
      body: (
        <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <li>음용과 에너지 활용을 <span className="font-semibold text-slate-900">등급으로 나누는 것</span>이 구조의 핵심. 원두를 버리지 않고 전량 활용해야 수익성과 일자리 양쪽이 좋아짐.</li>
          <li>오일 추출은 “추출 가능성”보다 <span className="font-semibold text-slate-900">추출 후 어디에 쓸 수 있는지</span>가 더 중요. 오일과 부산물의 용도를 같이 설계해야 경제성이 나옴.</li>
          <li>유통 단축은 한국 수입 주체가 물류·통관을 직접 가져가고, 현지 가공 능력이 있어야 실제 일자리로 이어짐.</li>
        </ul>
      ),
    },
  ];

const ugandaTableRows = [
  {
    region: "부소가(Busoga) / 동부",
    note: "로부스타 중심, 소규모 농가·협동조합 다수",
    gradeA: { share: "약 30%", use: "음용 원두 후보", note: "로스팅·음용 커피 적합도 검토" },
    gradeB: { share: "약 40%", use: "저등급 원두", note: "오일 추출·에너지·산업 소재 후보" },
    gradeC: { share: "약 30%", use: "불량/음용 부적합", note: "오일 추출 대상, 전량 활용 검토" },
  },
  {
    region: "키게지/키소로 등(Kigezi) / 남서부",
    note: "고지대 아라비카 계열, 산지에 따라 품질 편차 큼",
    gradeA: { share: "약 40%", use: "음용 원두 후보", note: "고급 아라비카 스토리 활용 가능" },
    gradeB: { share: "약 35%", use: "저등급 원두", note: "음용 애매 구간, 활용 분리 검토" },
    gradeC: { share: "약 25%", use: "불량/음용 부적합", note: "오일·에너지 활용 연계 검토" },
  },
  {
    region: "기타 지역(혼합)",
    note: "수집상·조합 경유 물량, 등급 혼재",
    gradeA: { share: "약 25%", use: "음용 원두 후보", note: "확보 조건에 따라 변동" },
    gradeB: { share: "약 45%", use: "저등급 원두", note: "대량 확보 시 활용 비중 커질 수 있음" },
    gradeC: { share: "약 30%", use: "불량/음용 부적합", note: "추출 대상·부산물 활용 검토" },
  },
];

const diagramFlow = [
  { label: "우간다 수매 원두", color: "bg-slate-900 text-white border-slate-600" },
  { label: "현지 선별/등급 분리", color: "bg-green-600 text-white border-green-500" },
  { label: "음용 원두", color: "border-green-500 bg-white" },
  { label: "저등급 원두", color: "border-amber-500 bg-white" },
  { label: "오일 추출 대상 원두", color: "border-rose-500 bg-white" },
  { label: "커피박/부산물", color: "border-slate-500 bg-white" },
  { label: "한국 로스팅·음용 커피", color: "bg-green-600 text-white border-green-500" },
  { label: "오일 추출 → 에너지/산업 소재", color: "bg-amber-600 text-white border-amber-500" },
  { label: "현지 연료·퇴비·바이오매스", color: "bg-slate-800 text-white border-slate-600" },
];

  return (
    <main className="min-h-screen bg-white">
      {/* ==================== 0️⃣ Header ==================== */}
      <header className="fixed top-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* 로고 영역 */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex flex-col leading-tight"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                Celltebah
              </span>
              <span className="text-[10px] text-green-700 font-bold uppercase tracking-widest">
                Bioenergy Research Center
              </span>
            </Link>

            <div className="h-8 w-[1px] bg-slate-200 mx-1 hidden sm:block" />
            <a
              href="https://www.jnu.ac.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-7 w-32 hidden sm:block"
            >
              <Image
                src="/images/jnu-logo.svg"
                alt="전남대학교"
                fill
                className="object-contain opacity-80"
                unoptimized
              />
            </a>
          </div>

          {/* 데스크탑 내비게이션 */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-bold text-slate-600">
            <Link href="#intro" className="hover:text-green-600 transition-colors">
              연구소 소개
            </Link>
            <Link href="#timeline" className="hover:text-green-600 transition-colors">
              연혁
            </Link>
            <Link href="#status" className="hover:text-green-600 transition-colors">
              연구 현황
            </Link>
            <Link href="#product" className="hover:text-green-600 transition-colors">
              주요 제품
            </Link>
            <Link href="#uganda" className="hover:text-green-600 transition-colors">
              우간다 기획
            </Link>

            <Link
              href="#contact"
              className="bg-green-600 text-white px-6 py-2.5 rounded-full hover:bg-green-500 transition-all shadow-md"
            >
              문의하기
            </Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            ref={hamburgerRef}
            className="md:hidden flex flex-col gap-1.5 z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-slate-900 transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2 !bg-white" : ""
              }`}
            />
            <div className={`w-6 h-0.5 bg-slate-900 ${isMenuOpen ? "opacity-0" : ""}`} />
            <div
              className={`w-6 h-0.5 bg-slate-900 transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2 !bg-white" : ""
              }`}
            />
          </button>
        </nav>

        {/* 모바일 메뉴 오버레이 */}
        <div
          className={`
            fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100]
            transition-opacity duration-300
            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            ref={menuRef}
            className={`
              absolute right-0 top-0 h-screen w-[270px] bg-slate-900/95
              shadow-2xl transition-transform duration-300
              transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
              p-8 flex flex-col pt-32
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <Link href="#intro" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>
              연구소 소개
            </Link>
            <Link href="#timeline" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>
              연혁
            </Link>
            <Link href="#status" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>
              연구 현황
            </Link>
            <Link href="#product" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>
              주요 제품
            </Link>
            <Link href="#uganda" className="text-xl font-bold text-slate-200 border-b border-white/10 pb-4" onClick={() => setIsMenuOpen(false)}>
              우간다 기획
            </Link>
            <Link href="#contact" className="text-2xl font-bold text-green-400 pt-4" onClick={() => setIsMenuOpen(false)}>
              문의하기
            </Link>
          </div>
        </div>
      </header>

      {/* ==================== 1️⃣ Hero ==================== */}
      <section
        id="intro"
        className="relative h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-12 scroll-mt-20"
      >
        <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-green-600 via-emerald-800 to-slate-950" />
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-green-400/30 rounded-full bg-green-500/10 backdrop-blur-sm">
            <span className="text-green-300 font-bold tracking-widest uppercase text-xs">
              Sustainable Future
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.2] tracking-tight">
            탄소중립의 해답,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-300">
              바이오에너지가 미래입니다
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            바이오에너지는 화석연료를 대체하는 가장 현실적인 대안입니다.
            <br className="hidden md:block" />
            우리 연구소는 지속 가능한 에너지와 고부가가치 소재 생태계를 연구합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#status" className="bg-green-600 hover:bg-green-500 text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-lg">
              연구 현황
            </Link>
            <Link href="#product" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-12 py-5 rounded-full text-xl font-bold transition-all">
              주요 제품
            </Link>
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
            <h3 className="text-4xl font-extrabold text-slate-900 border-b-4 border-green-600 inline-block pb-2">
              연구 현황
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Bio‑Ethanol", desc: "고효율 바이오에탄올 생산 공정 최적화 및 상용화 연구", img: "/images/bioethanol-edited.jpg" },
              { title: "High‑Activity Enzymes", desc: "바이오매스 분해 효율 극대화를 위한 고활성 효소 칵테일 개발", img: "/images/enzyme-edited.jpg" },
              { title: "Functional Materials", desc: "바이오 공정 부산물을 활용한 고부가가치 기능성 소재 추출", img: "/images/functional-edited.jpg" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 border border-slate-100 cursor-pointer"
                onClick={() => setSelectedImg(item.img)}
              >
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Main Business</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-4">주요 제품 및 사업</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              현재 선별된 In-house 효소 생산부터 바이오슈가, 바이오에탄올, 희귀당, 프리바이오틱스 올리고당,
              플랫폼 케미컬, 바이오액티브 소재까지 7개 분류 31종을 구성해 둡니다.
            </p>
          </div>

          {/* 분류 필터 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold border transition-all
                  ${activeCat === cat.key
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-slate-700 border-slate-200 hover:border-green-400"
                  }
                `}
                onClick={() => setActiveCat(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 제품 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-green-400 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                    {p.cat}
                  </span>
                  <Link
                    href={`/product/${p.id}`}
                    className="text-xs text-green-700 font-semibold hover:underline"
                  >
                    상세 보기
                  </Link>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{p.name}</h4>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed">{p.src}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              해당 분류의 제품이 없습니다.
            </div>
          )}

          <div className="mt-14 text-center text-sm text-slate-500 border-t border-slate-200 pt-10">
            MOS / XOS / COS는 Oligosaccharide(Prebiotics)로 묶어 구성했습니다.
            <br />
            각 제품에는 주요 원료 소스와 용도 예시를 함께 표시해, 기존 구좌를 현재 선별 라인업으로 교체할 수 있도록 설계했습니다.
          </div>
        </div>
      </section>

      {/* 이미지 확대 모달 */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[1000] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] drop-shadow-2xl">
            <Image src={selectedImg} alt="Full view" fill className="object-contain" unoptimized />
          </div>
          <button className="absolute top-8 right-8 text-white bg-slate-800/50 w-12 h-12 rounded-full flex items-center justify-center text-3xl font-light hover:bg-slate-700 transition-all">
            &times;
          </button>
        </div>
      )}

      {/* ==================== 4.5️⃣ Uganda Coffee Initiative ==================== */}
<section
  id="uganda"
  className="py-24 bg-slate-50 scroll-mt-20"
>
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Uganda Coffee Initiative</h2>
      <h3 className="text-4xl font-extrabold text-slate-900 mb-4">
        우간다 커피 × 청년 일자리 × 바이오에너지 연계 기획
      </h3>
      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        전남대 바이오에너지연구소와 우간다 청년 리더가 함께 검토하는 파일럿형 사업입니다.
        좋은 커피는 음용으로, 음용으로 쓰기 어려운 원두는 오일 추출 후 에너지·산업 소재로 활용해
        현지 일자리와 유통 단축, 전량 활용을 동시에 고려합니다.
      </p>
    </div>

    {/* 연구소 역할 강조 */}
    <div className="bg-slate-900 rounded-2xl p-6 md:p-8 mb-14 border border-slate-700">
      <div className="flex items-start gap-5">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold">
            R
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="text-lg font-bold text-white mb-2">연구소 역할</h4>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            우리는 <strong className="text-green-300">오일 추출 공정 설계</strong>,
            <strong className="text-green-300">품질·용도 정의</strong>,
            <strong className="text-green-300">커피박 활용 연구</strong>를 중심으로
            음용 커피와 에너지·산업 소재가 연결되는 구조를 설계합니다.
          </p>
        </div>
      </div>
    </div>

    {/* 산지/등급/물량 정리 표 */}
    <div className="mb-14 overflow-x-auto">
  <table className="min-w-full border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden">
    <thead>
      <tr className="bg-slate-900 text-slate-200">
        <th className="border border-slate-700 px-5 py-4 text-left font-bold text-sm uppercase tracking-wider">산지(추정)</th>
        <th className="border border-slate-700 px-5 py-4 text-left font-bold text-sm uppercase tracking-wider">특징</th>
        <th className="border border-slate-700 px-5 py-4 text-left font-bold text-sm uppercase tracking-wider">음용 원두 후보</th>
        <th className="border border-slate-700 px-5 py-4 text-left font-bold text-sm uppercase tracking-wider">저등급 원두</th>
        <th className="border border-slate-700 px-5 py-4 text-left font-bold text-sm uppercase tracking-wider">오일 추출 대상</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-200">
      {ugandaTableRows.map((row, idx) => (
        <tr key={idx} className="hover:bg-slate-50">
          <td className="border border-slate-200 px-5 py-4 font-semibold text-slate-900">{row.region}</td>
          <td className="border border-slate-200 px-5 py-4 text-slate-600 text-sm leading-relaxed">{row.note}</td>
          <td className="border border-slate-200 px-5 py-4">
            <span className="text-sm font-semibold text-green-700">{row.gradeA.share}</span>
            <div className="text-xs text-slate-500 mt-1 leading-relaxed">{row.gradeA.use}</div>
            <div className="text-xs text-slate-400 mt-0.5">{row.gradeA.note}</div>
          </td>
          <td className="border border-slate-200 px-5 py-4">
            <span className="text-sm font-semibold text-amber-700">{row.gradeB.share}</span>
            <div className="text-xs text-slate-500 mt-1 leading-relaxed">{row.gradeB.use}</div>
            <div className="text-xs text-slate-400 mt-0.5">{row.gradeB.note}</div>
          </td>
          <td className="border border-slate-200 px-5 py-4">
            <span className="text-sm font-semibold text-rose-700">{row.gradeC.share}</span>
            <div className="text-xs text-slate-500 mt-1 leading-relaxed">{row.gradeC.use}</div>
            <div className="text-xs text-slate-400 mt-0.5">{row.gradeC.note}</div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className="mt-3 text-xs text-slate-500 text-center">
    위 비율은 실제 확보 기준이 아니라 검토를 위한 가안입니다. 실제 산지·등급·물량이 확인되면 수치를 다시 맞춥니다.
  </div>
</div>





    {/* 원두 흐름 다이어그램 */}
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-14">
      <h4 className="text-lg font-bold text-slate-900 mb-6 text-green-700">원두 분류 → 활용 흐름</h4>

      <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
        <div className="flex items-center gap-3 bg-slate-900 rounded-xl px-5 py-3 border border-slate-600">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-sm font-bold text-white">수매 원두</span>
        </div>

        <div className="text-slate-400 text-xl font-thin">→</div>

        <div className="flex items-center gap-3 bg-green-600 rounded-xl px-5 py-3 border border-green-500">
          <div className="w-3 h-3 rounded-full bg-white" />
          <span className="text-sm font-bold text-white">선별</span>
        </div>

        <div className="text-slate-400 text-xl font-thin">→</div>

        <div className="flex flex-wrap gap-3">
          <div className="border-t-2 border-green-500 pl-4">
            <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 py-3 border border-slate-200">
              <div className="w-3 h-3 rounded-full bg-green-600" />
              <span className="text-sm font-semibold text-slate-900">음용 원두</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 ml-1">로스팅·음용 커피</div>
          </div>

          <div className="border-t-2 border-amber-500 pl-4">
            <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 py-3 border border-slate-200">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm font-semibold text-slate-900">저등급 원두</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 ml-1">오일 추출·에너지·산업 소재</div>
          </div>

          <div className="border-t-2 border-amber-500 pl-4">
            <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-5 py-3 border border-slate-200">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-sm font-semibold text-slate-900">커피박/부산물</span>
            </div>
            <div className="text-xs text-slate-500 mt-1 ml-1">연료·퇴비·바이오매스</div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500 text-center">
        위 흐름은 예시 구조입니다. 실제 등급 기준, 선별 방식, 추출 대상 구분은 우간다 현지 조건과 연구소 검토 결과에 따라 정리됩니다.
      </div>
    </div>




    {/* 카드 설명 */}
    <div className="grid md:grid-cols-2 gap-8">
      {ugandaCards.map((card) => (
        <div
          key={card.title}
          className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <h4 className="text-xl font-bold text-slate-900 mb-4 text-green-700">{card.title}</h4>
          {card.body}
        </div>
      ))}
    </div>

    <div className="mt-14 text-center text-sm text-slate-500 border-t border-slate-200 pt-10">
      상기 내용은 협력 방향 검토를 위한 기획 초안입니다. 실제 물량·단가·가공비·통관 조건은
      우간다 현지 확보 조건과 한국 수입·판매 채널에 따라 달라질 수 있습니다.
    </div>
  </div>
</section>


      {/* ==================== 5️⃣ Inquiry ==================== */}
      <section id="contact" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Inquiry</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">문의하기</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="성함 또는 기관명"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-green-500 transition-all text-slate-900 bg-slate-50/50"
              />
              <input
                type="email"
                placeholder="이메일 주소"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-green-500 transition-all text-slate-900 bg-slate-50/50"
              />
            </div>
            <textarea
              rows={5}
              placeholder="문의 내용을 입력해 주세요."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-green-500 transition-all text-slate-900 bg-slate-50/50"
            />
            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl text-xl font-bold transition-all shadow-lg active:scale-95"
              type="submit"
            >
              {status === "sending" ? "전송 중..." : "문의 메시지 보내기"}
            </button>
            {status === "success" && (
              <p className="text-center text-green-600 font-black">
                정상적으로 전송되었습니다.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-500 font-bold">
                오류가 발생했습니다.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm font-medium">
          © 2026 Celltebah Bioenergy Research Center. Chonnam National University. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
