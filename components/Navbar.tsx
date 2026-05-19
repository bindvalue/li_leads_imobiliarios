import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-white/70 backdrop-blur-xl border-b border-slate-200/50 transition-all">
      <Link href="/" className="flex items-center">
        <Image src="/images/logo_li.png" alt="L.I Leads Imobiliários" width={150} height={40} className="h-8 w-auto object-contain" />
      </Link>
      <a href="#contato" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B31D98] to-[#F5B049] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md">
        Quero mais leads <ArrowRight className="w-4 h-4" />
      </a>
    </nav>
  );
}