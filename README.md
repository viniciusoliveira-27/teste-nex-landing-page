# 🚀 NEX Digital Solutions - Landing Page

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg)](https://vercel.com/)

Uma landing page moderna e responsiva para a NEX Digital Solutions, desenvolvida com React, TypeScript e Tailwind CSS. O projeto inclui uma funcionalidade avançada de busca de CEP integrada com a API ViaCEP.

## 🎯 Sobre o Projeto

Este projeto é uma landing page para a NEX Digital Solutions, uma agência digital especializada em soluções criativas e estratégicas. A página foi desenvolvida como parte de um teste técnico, demonstrando habilidades em:

- **Front-end moderno** com React e TypeScript
- **Design responsivo** com Tailwind CSS
- **Integração com APIs** externas (ViaCEP)
- **Gestão de estado** com hooks personalizados
- **Componentização** e arquitetura escalável

## ✨ Funcionalidades

### 🏠 Landing Page Completa
- **Navbar responsiva** com menu mobile
- **Hero section** com design moderno
- **Seção de serviços** com cards interativos
- **Como trabalhamos** com workflow visual
- **Seção sobre a empresa** com estatísticas
- **Call-to-action** e footer

### 🔍 Busca de CEP Avançada
- **Modal interativo** acionado pelo botão de busca
- **Validação automática** de CEP (com ou sem hífen)
- **Integração com ViaCEP API** para dados precisos
- **Histórico de buscas** com persistência na sessão
- **Campos bloqueados** conforme especificação
- **Tratamento robusto de erros**

### 📱 Interface Responsiva
- **Design adaptativo** para todos os dispositivos
- **Animações suaves** e transições
- **Acessibilidade** com ARIA labels
- **Performance otimizada**

## 🛠️ Tecnologias

### Core
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool moderna
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### Dependências
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[ViaCEP API](https://viacep.com.br/)** - Dados de endereço

### DevTools
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/nex-digital-solutions.git
cd nex-digital-solutions
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto:**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador:**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev      # Executa em modo desenvolvimento
npm run build    # Gera build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa ESLint
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── navbar/          # Barra de navegação
│   │   ├── navbar.tsx
│   │   └── index.ts
│   ├── searchModal/     # Modal de busca CEP
│   │   ├── SearchModal.tsx
│   │   └── index.ts
│   ├── digitalSolution/ # Seção hero
│   ├── serviceCard/     # Cards de serviços
│   ├── howWeWorkSection/ # Workflow
│   ├── digitalSuccess/  # Sobre a empresa
│   ├── ctaSection/      # Call-to-action
│   └── footer/          # Rodapé
├── hooks/               # Hooks personalizados
│   ├── useCepSearch.ts  # Hook para busca CEP
│   └── index.ts
├── assets/             # Recursos estáticos
├── App.tsx            # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🔍 Funcionalidade de Busca CEP

### 🎯 Como Funciona

1. **Ativação:** Clique no ícone de busca (🔍) na navbar
2. **Modal abre** com campo de busca e histórico
3. **Digite o CEP** (com ou sem hífen)
4. **Validação automática** em tempo real
5. **Busca na API ViaCEP** com feedback visual
6. **Exibição dos dados** em campos bloqueados
7. **Histórico salvo** para consultas futuras

### 🔧 Implementação Técnica

#### Hook Personalizado (`useCepSearch`)
```typescript
// Gestão de estado global para busca CEP
const { searchHistory, isLoading, error, searchCep } = useCepSearch();
```

**Funcionalidades do Hook:**
- ✅ Busca assíncrona na API ViaCEP
- ✅ Validação e formatação de CEP
- ✅ Histórico das últimas 10 buscas
- ✅ Cache para evitar buscas duplicadas
- ✅ Tratamento de erros robusto
- ✅ Loading states gerenciados

#### Campos Preenchidos Automaticamente
| Campo | Fonte API | Status |
|-------|-----------|--------|
| **CEP** | `cep` | 🔒 Bloqueado |
| **Logradouro** | `logradouro` | 🔒 Bloqueado |
| **Complemento** | `complemento` | 🔒 Bloqueado |
| **Bairro** | `bairro` | 🔒 Bloqueado |
| **Cidade** | `localidade` | 🔒 Bloqueado |
| **UF** | `uf` | 🔒 Bloqueado |
| **Estado** | Convertido de UF | 🔒 Bloqueado |

#### Validação de CEP
```typescript
// Aceita formatos: 12345678 ou 12345-678
const isValidCep = (cep: string): boolean => {
  const cleaned = cep.replace(/\D/g, '');
  return cleaned.length === 8 && /^\d{8}$/.test(cleaned);
};
```

### 📊 API Integration

**Endpoint:** `https://viacep.com.br/ws/{cep}/json/`

**Exemplo de Resposta:**
```json
{
  "cep": "01310-100",
  "logradouro": "Avenida Paulista",
  "complemento": "",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

## 🚀 Deploy

Este projeto está hospedado na **Vercel** com deploy automático configurado:

- **URL de Produção:** [https://teste-nex-landing-page.vercel.app/](https://teste-nex-landing-page.vercel.app/)
- **Deploy automático** a cada push na branch main
- **HTTPS** e **CDN global** configurados automaticamente

### Para fazer seu próprio deploy:

1. **Fork** este repositório
2. **Conecte** sua conta Vercel ao GitHub
3. **Import** o projeto na Vercel
4. **Deploy** automático será executado

## 📄 Licença

Este projeto foi desenvolvido como teste técnico para demonstração de habilidades em desenvolvimento front-end.

---

## 🏆 Diferenciais Implementados

✅ **Componentização** modular e escalável  
✅ **TypeScript** com tipagem completa  
✅ **Hooks personalizados** para estado global  
✅ **Integração API** robusta com ViaCEP  
✅ **Design responsivo** para todos os dispositivos  
✅ **Performance** otimizada com Vite  
✅ **Tratamento de erros** abrangente  
✅ **Experiência do usuário** polida  
✅ **Código limpo** e bem documentado  
✅ **Deploy automático** na Vercel  

---

**Desenvolvido usando React, TypeScript e Tailwind CSS**

*Este README demonstra não apenas como usar o projeto, mas também a qualidade técnica e atenção aos detalhes na implementação.*