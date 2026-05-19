// Rota da página de Política de Privacidade
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Política de Privacidade | L.I Leads Imobiliários",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-3xl mx-auto bg-slate-50 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-8">Política de Privacidade</h1>

        <div className="text-slate-600 font-light leading-relaxed space-y-6">
          <p>
            A sua privacidade é importante para nós. É política da L.I Leads Imobiliários respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
          </p>

          <h2 className="text-xl font-medium text-slate-900 mt-8 mb-3">1. Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>

          <h2 className="text-xl font-medium text-slate-900 mt-8 mb-3">2. Uso de informações</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2 className="text-xl font-medium text-slate-900 mt-8 mb-3">3. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
          </p>

          <h2 className="text-xl font-medium text-slate-900 mt-8 mb-3">4. Cookies</h2>
          <p>
            Utilizamos cookies para entender como você interage com o nosso site e melhorar a sua experiência. Você pode recusar o uso de cookies através das configurações do seu navegador, mas isso pode afetar o funcionamento de alguns recursos do site.
          </p>

          <h2 className="text-xl font-medium text-slate-900 mt-8 mb-3">5. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através dos nossos canais de atendimento.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}