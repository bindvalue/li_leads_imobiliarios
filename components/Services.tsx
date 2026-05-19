import { Megaphone, Search, Settings, LineChart, FileSpreadsheet, Layers } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Megaphone, title: "Tráfego Pago Meta", desc: "Criação, monitoramento e otimização de campanhas no Facebook e Instagram para atrair compradores e locatários reais." },
    { icon: Layers, title: "Gestão de Social Media", desc: "Estratégia de conteúdo para posicionar sua marca como referência no mercado imobiliário da sua região." },
    { icon: Search, title: "SEO Imobiliário", desc: "Otimização para que seu perfil e páginas apareçam nas buscas de quem procura imóveis ativamente." },
    { icon: Settings, title: "Configuração de Campanhas", desc: "Estruturação técnica completa: públicos, criativos, orçamento e segmentação para o mercado imobiliário." },
    { icon: LineChart, title: "Monitoramento Contínuo", desc: "Acompanhamento diário dos resultados com ajustes em tempo real para maximizar o retorno da sua verba." },
    { icon: FileSpreadsheet, title: "Relatórios de Performance", desc: "Relatórios claros e objetivos para você saber exatamente quanto está investindo e o que está retornando." },
  ];

  return (
    <section className="py-24 px-6 bg-white" id="servicos">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="text-xs font-medium tracking-widest text-[#B31D98] uppercase mb-4">O que fazemos</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Tudo que você precisa para vender mais online
            </h2>
          </div>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            Cuidamos do digital para você focar no que sabe fazer melhor: vender imóveis e atender seus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-6 text-[#B31D98] group-hover:scale-110 transition-transform duration-300">
                <service.icon strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}