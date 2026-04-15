"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabaseClient";

export default function ContactForm() {
  // 1. 필요한 상태(State) 정의
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // 2. 입력란 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 3. 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // getSupabase를 통해 버튼을 누를 때만 클라이언트를 생성 (빌드 에러 방지)
      const supabase = getSupabase();

      const { error } = await supabase.from("inquiries").insert([
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" }); // 성공 시 폼 초기화
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "알 수 없는 오류가 발생했습니다.");
      setStatus("error");
    }
  };

  return (
    <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium mb-1">이름</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="홍길동"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">이메일</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">문의 내용</label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="문의 사항을 입력해 주세요."
        />
      </div>

      {/* 상태 메세지 */}
      {status === "error" && (
        <p className="text-red-600 font-medium">❌ 전송 실패: {errorMsg}</p>
      )}
      {status === "success" && (
        <p className="text-green-600 font-medium">✅ 문의가 정상적으로 전송되었습니다.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition shadow-md ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : "active:scale-[0.98]"
        }`}
      >
        {status === "loading" ? "전송 중…" : "보내기"}
      </button>
    </form>
  );
}
