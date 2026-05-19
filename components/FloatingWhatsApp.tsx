import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a href="https://wa.me/5531983056470?text=Olá!%20Vim%20pelo%20site%20da%20L.I%20Leads%20Imobiliários%20e%20quero%20saber%20mais." className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300" target="_blank" rel="noopener noreferrer" title="Falar no WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}