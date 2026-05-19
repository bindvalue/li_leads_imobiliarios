export default function Numbers() {
  return (
    <div className="bg-slate-50 pt-20 pb-24 px-6 border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="text-center py-12 px-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <span className="block text-4xl font-semibold tracking-tight bg-gradient-to-br from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent mb-2">Meta</span>
          <span className="text-sm text-slate-500 font-light">Plataforma de anúncios gerenciada</span>
        </div>
        <div className="text-center py-12 px-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <span className="block text-4xl font-semibold tracking-tight bg-gradient-to-br from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent mb-2">100%</span>
          <span className="text-sm text-slate-500 font-light">Foco no mercado imobiliário</span>
        </div>
        <div className="text-center py-12 px-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <span className="block text-4xl font-semibold tracking-tight bg-gradient-to-br from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent mb-2">Zero</span>
          <span className="text-sm text-slate-500 font-light">Fidelidade ou prazo mínimo</span>
        </div>
      </div>
    </div>
  );
}