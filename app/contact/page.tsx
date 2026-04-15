// app/contact/page.tsx
"use client";                     // ← ★ 여기에 한 줄만 추가하면 됩니다.

export const dynamic = "force-dynamic";   // 프리렌더링(SSG) 방지

export const metadata = {
  title: "문의하기 – 바이오에너지연구소",
};

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 bg-slate-100">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          문의하기
        </h1>
        <p className="text-lg text-slate-700">
          프로젝트 협업·기술 상담·투자 문의는 아래 양식을 작성해 주세요.
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
