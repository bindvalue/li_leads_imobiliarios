# 🚀 L.I Leads Imobiliários

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<br />

Uma Landing Page moderna, focada em conversão e otimizada para SEO, desenvolvida para a **L.I Leads Imobiliários** — especialistas em gestão estratégica de tráfego pago (Meta Ads) para corretores e imobiliárias.

O design foi inspirado no **Apple Human Interface Guidelines (HIG)**, apresentando tipografia limpa (Inter), componentes com efeito de *Glassmorphism* e uma paleta de cores gradiente vibrante.

---

## ✨ Funcionalidades

- **Design Premium e Responsivo:** UI/UX moderna que se adapta perfeitamente a dispositivos móveis, tablets e desktops.
- **Componentização React:** Estrutura modular dividida em componentes (`Hero`, `Services`, `Numbers`, `Differentials`, etc.) para fácil manutenção.
- **Otimização SEO (Next.js Metadata):** Configuração nativa de Open Graph, Twitter Cards e meta tags para melhor ranqueamento no Google e compartilhamento elegante nas redes sociais.
- **Ícones Lucide:** Iconografia leve, consistente e de alta qualidade geométrica utilizando a biblioteca `lucide-react`.
- **Aviso de Cookies Persistente:** Componente *Client-Side* de consentimento de privacidade salvando as preferências no `localStorage`.
- **Integração Rápida via WhatsApp:** Botão flutuante dinâmico e chamadas de ação (CTAs) que levam os leads diretamente para conversas configuradas no WhatsApp.

## 🎨 Identidade Visual (Design System)

- **Tipografia:** Fonte primária `Inter` (suavizada com *antialiased*).
- **Paleta de Gradiente Principal:** 
  - Púrpura/Fúcsia: `#B31D98`
  - Laranja/Âmbar: `#F5B049`
- **Efeitos UI:** Sombras suaves (`shadow-sm`, `shadow-xl`), bordas arredondadas e fundos desfocados (`backdrop-blur-xl`).

## 📂 Estrutura de Pastas

```text
📦 lileads
 ┣ 📂 app
 │ ┣ 📂 politica-de-privacidade
 │ │ ┗ 📜 page.tsx           # Página de Política de Privacidade
 │ ┣ 📜 globals.css          # Estilos globais e entrada do Tailwind
 │ ┣ 📜 layout.tsx           # Layout base (Configuração de Fonte, SEO e Cookies)
 │ ┗ 📜 page.tsx             # Landing Page (Home)
 ┣ 📂 components
 │ ┣ 📜 CtaFinal.tsx         # Call to Action do rodapé
 │ ┣ 📜 Differentials.tsx    # Seção de diferenciais competitivos
 │ ┣ 📜 Hero.tsx             # Seção inicial de impacto
 │ ┣ 📜 Navbar.tsx           # Cabeçalho com navegação
 │ ┗ 📜 ... (outros componentes)
 ┣ 📂 public
 │ ┣ 📂 images
 │ │ ┗ 📜 logo_li.png        # Logo do site
 │ ┗ 📜 favicon.png          # Ícone da aba do navegador
 ┣ 📜 tailwind.config.ts     # Configuração do Tailwind e cores customizadas
 ┗ 📜 package.json           # Dependências e scripts
```

## 🚀 Como rodar o projeto localmente

Siga os passos abaixo para testar e modificar o projeto na sua máquina:

**1. Clone o repositório:**
```bash
git clone https://github.com/bindvalue/li_leads_imobiliarios.git
cd li_leads_imobiliarios
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

Abra o navegador e acesse http://localhost:3000.

---
<div align="center">Feito com 💻 e ☕</div>
