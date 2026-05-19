import { MessageCircle } from "lucide-react";

export default function CtaFinal() {
  return (
    <section className="py-32 px-6 bg-slate-900 text-center relative overflow-hidden" id="contato">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#B31D98] to-[#F5B049] opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
          Pronto para gerar<br />mais leads imobiliários?
        </h2>
        <p className="text-lg text-slate-400 font-light mb-10">
          Fale agora com a equipe da L.I e receba uma análise gratuita do seu digital.
        </p>
        <a href="https://wa.me/5531983056470?text=Olá!%20Vim%20pelo%20site%20da%20L.I%20Leads%20Imobiliários%20e%20quero%20saber%20mais." className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B31D98] to-[#F5B049] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}