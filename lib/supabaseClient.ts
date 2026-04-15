// lib/supabaseClient.ts (수정본)
import { createClient } from '@supabase/supabase-js'

export const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // 빌드 시점에 에러를 던지지 않고 null을 반환하거나 콘솔만 찍음
    console.warn("Supabase 환경 변수가 없습니다.");
  }

  return createClient(supabaseUrl || "", supabaseAnonKey || "");
}
