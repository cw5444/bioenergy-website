// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabaseClient"; // 수정된 함수 가져오기

export default function ContactForm() {
  // ... 생략 (상태 관리 코드)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = getSupabase(); // 클릭했을 때만 실행됨!

    const { error } = await supabase
      .from("inquiries")
      .insert({ name: form.name, email: form.email, message: form.message });

    // ... 생략
  };

  // ... 이하 동일
}

      },
    ]);

    if (error) {
      console.error(error);
      setErrorMsg(error.message);
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <form
      className="max-w-xl mx-auto space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block font-medium mb-1">이름</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
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
        />
      </div>

      {/* 상태 메세지 */}
      {status === "error" && (
        <p className="text-red-600">❌ 전송 실패: {errorMsg}</p>
      )}
      {status === "success" && (
        <p className="text-green-600">✅ 문의가 정상적으로 전송되었습니다.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold transition ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {status === "loading" ? "전송 중…" : "보내기"}
      </button>
    </form>
  );
}
