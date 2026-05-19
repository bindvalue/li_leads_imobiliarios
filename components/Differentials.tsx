import { Ban, BadgeDollarSign, Home, Phone, Sparkles } from "lucide-react";

export default function Differentials() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-medium tracking-widest text-[#B31D98] uppercase mb-4">Por que a L.I</div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-16">
          Sem enrolação. Sem fidelidade.<br />Só resultado.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
              <Ban strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Sem período de fidelidade</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Você pode cancelar a qualquer momento com 30 dias de aviso. Ficamos porque entregamos resultado, não porque você é obrigado.</p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
              <BadgeDollarSign strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Verba 100% sua</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Você paga a verba de mídia diretamente ao Meta. Sem margem escondida, sem comissão em cima do seu dinheiro.</p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
              <Home strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Especialistas em imóveis</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Não somos uma agência generalista. Entendemos o ciclo de vendas imobiliário, a linguagem do comprador e o comportamento do mercado de BH.</p>
            </div>
          </div>

          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
            <div className="w-12 h-12 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600">
              <Phone strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Comunicação direta</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">Acesso direto ao gestor responsável pela sua conta. Sem terceiros, sem robôs, sem demora para responder.</p>
            </div>
          </div>

          <div className="md:col-span-2 p-12 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl shadow-xl text-center text-white relative overflow-hidden border border-purple-800/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/10">
              <Sparkles strokeWidth={1.5} className="w-8 h-8 text-[#B31D98]" />
            </div>
            <h3 className="text-2xl font-medium tracking-tight mb-2">Investimento mensal</h3>
            <div className="text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent mb-4">R$ 1.500</div>
            <p className="text-slate-400 font-light max-w-lg mx-auto">Gestão completa de tráfego pago + Social Media + SEO. Sem taxa de setup, sem surpresas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}