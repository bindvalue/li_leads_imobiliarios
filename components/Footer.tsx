import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-950 text-center border-t border-white/5">
      <div className="font-semibold text-lg tracking-tight bg-gradient-to-r from-[#B31D98] to-[#F5B049] bg-clip-text text-transparent mb-4">L.I Leads Imobiliários</div>
      <p className="text-xs text-slate-500 font-light mb-2">VNB Group LTDA · CNPJ 66.092.021/0001-92 · Belo Horizonte, MG</p>
      <p className="text-xs text-slate-600 font-light">© 2026 L.I Leads Imobiliários. Todos os direitos reservados.</p>
      <div className="mt-6">
        <Link href="/politica-de-privacidade" className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2">Política de Privacidade</Link>
      </div>
    </footer>
  );
}