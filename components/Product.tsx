"use client";

export default function Product() {
  const products = [
    { name: "MOS", desc: "고정밀 효소 처리 공법을 통해 생산되는 고순도 MOS. 면역 증강 기능성 소재로 활용됩니다." },
    { name: "XOS", desc: "옥수수 등 초본류 바이오매스 유래 저분자 XOS. 장내 유익균 활성화에 탁월한 효과를 보입니다." },
    { name: "COS", desc: "해양 바이오매스를 활용한 고부가가치 COS. 상당히 고가이며 생산이 까다로운 물질을 맞춤 제작합니다." },
  ];

  return (
    <section id="product" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-green-700 font-bold mb-2 uppercase tracking-tight">Main Product</h2>
        <h3 className="text-4xl font-extrabold text-slate-900 mb-8">주요 사업 (프로덕트)</h3>
        
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          일반적으로 생산이 어렵거나 시장가가 매우 높은 <span className="text-green-700 font-bold">고부가가치 물질(MOS, XOS, COS 등)</span>을 
          바이오매스 기반 기술을 통해 <span className="bg-green-100 text-green-800 px-1">소량 주문 제작 및 판매</span>하고 있습니다. 
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
              <div className="text-4xl font-black text-green-600 mb-4">{p.name}</div>
              <p className="text-slate-600 font-medium leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
