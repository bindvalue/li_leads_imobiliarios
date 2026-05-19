"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica no navegador se o usuário já aceitou os cookies
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-6 md:right-auto md:max-w-sm z-[100] bg-white/80 backdrop-blur-2xl border border-slate-200/50 p-6 rounded-3xl shadow-2xl">
      <h3 className="text-slate-900 font-semibold tracking-tight mb-2 text-lg">Cookies e Privacidade</h3>
      <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
        Utilizamos cookies para personalizar conteúdo e melhorar a sua experiência no nosso site. Ao continuar navegando, você concorda com a nossa{" "}
        <Link href="/politica-de-privacidade" className="text-[#B31D98] underline hover:text-[#F5B049] transition-colors">Política de Privacidade</Link>.
      </p>
      <div className="flex gap-3">
        <button onClick={handleAccept} className="w-full bg-gradient-to-r from-[#B31D98] to-[#F5B049] text-white px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md">
          Aceitar e Continuar
        </button>
      </div>
    </div>
  );
}