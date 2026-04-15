// app/contact/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("전송 중…");
    const { error } = await supabase.from("inquiries").insert([form]);
    if (error) {
      setStatus(`오류: ${error.message}`);
    } else {
      setStatus("전송 성공! 곧 답변드리겠습니다.");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">문의하기</h2>
      {status && <p className="mb-4 text-center">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="성함"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="문의 내용"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-bio-green text-white py-2 rounded hover:bg-bio-dark transition"
        >
          전송
        </button>
      </form>
    </section>
  );
}
