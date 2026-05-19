import { ArrowRight, TrendingUp, Target, Crosshair, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden bg-slate-50">
      {/* Blurred background accents for soft depth */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B31D98]/10 border border-[#B31D98]/20 text-[#B31D98] text-xs font-medium tracking-wide uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-[#B31D98] animate-pulse" />
            Especialistas em mercado imobiliário
          </div>
          <h1 className="text-4xl md:text-[3.5rem] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Seu imóvel na frente de <span className="bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent">quem realmente quer comprar</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light max-w-lg">
            Gestão estratégica de tráfego pago no Meta + Social Media para corretores e imobiliárias que querem resultados reais, sem enrolação.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contato" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md">
              <span>Quero gerar leads</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servicos" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-slate-700 bg-white border border-slate-200 hover:text-slate-900 hover:bg-slate-50 transition-all shadow-sm">
              Ver o que fazemos
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden border border-purple-800/50">
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-fuchsia-500/40 rounded-full blur-3xl" />
            <div className="font-semibold text-xl tracking-tight mb-8">L.I Leads</div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent flex items-center gap-2"><TrendingUp strokeWidth={1.5} className="w-6 h-6 text-[#B31D98]"/> 3x</div>
                <div className="text-xs text-slate-400 mt-2">Mais alcance orgânico</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent flex items-center gap-2"><Target strokeWidth={1.5} className="w-6 h-6 text-[#F5B049]"/> 92%</div>
                <div className="text-xs text-slate-400 mt-2">Leads qualificados</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent flex items-center gap-2"><Crosshair strokeWidth={1.5} className="w-6 h-6 text-[#B31D98]"/> Meta</div>
                <div className="text-xs text-slate-400 mt-2">Ads otimizados</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent flex items-center gap-2"><MapPin strokeWidth={1.5} className="w-6 h-6 text-[#F5B049]"/> BH</div>
                <div className="text-xs text-slate-400 mt-2">Foco local + nacional</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Campanha ativa agora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}