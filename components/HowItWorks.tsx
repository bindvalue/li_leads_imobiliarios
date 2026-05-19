export default function HowItWorks() {
  const steps = [
    { num: "1", title: "Diagnóstico grátis", desc: "Analisamos sua presença digital atual e o potencial do seu negócio no digital." },
    { num: "2", title: "Planejamento", desc: "Montamos a estratégia de campanhas personalizada para o seu perfil e região." },
    { num: "3", title: "Campanha no ar", desc: "Configuramos e publicamos. Sua marca começa a aparecer para os compradores certos." },
    { num: "4", title: "Otimização contínua", desc: "Monitoramos, ajustamos e reportamos os resultados mensalmente." },
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-medium tracking-widest text-[#B31D98] uppercase mb-4">Processo</div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-4">Como funciona</h2>
          <p className="text-slate-600 text-lg font-light">Da conversa à primeira campanha no ar em poucos dias.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-slate-200" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center px-4">
              <div className="w-12 h-12 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-semibold text-lg mb-6 relative z-10 shadow-md">
                {step.num}
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}