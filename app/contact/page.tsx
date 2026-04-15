import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "문의하기 – 바이오에너지연구소",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 bg-slate-50">
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
