# Relatório de Auditoria e Modernização de Websites Legados
**Data da Auditoria:** 2026-04-18
**Responsável:** Assistente de Desenvolvimento (Trae IDE)

## 1. Visão Geral
Este documento apresenta o diagnóstico detalhado de quatro repositórios de websites legados, analisando aspectos de funcionamento, responsividade, performance, acessibilidade e SEO.

| Website | Pasta | Tecnologia Base | Status de Execução |
| :--- | :--- | :--- | :--- |
| Cælvm Seguros | `caelvm` | Next.js 12 / Bootstrap 5 | Operacional com ressalvas |
| Cavtio Ações Sociais | `cavtio` | Next.js 12 / Bootstrap 5 | Operacional com ressalvas |
| Generalis Advocacia | `generalis` | Next.js 12 / Bootstrap 5 | Operacional com ressalvas |
| Tec Institucional | `tec` | Next.js 12 / Bootstrap 5 | Operacional (Clone do Cavtio) |

---

## 2. Esquema Detalhado de Melhorias por Site

### 2.1 Cælvm Seguros (`caelvm`)
#### 1) Usabilidade e Navegação
- **Problema:** O grid de produtos utiliza um cálculo manual no JavaScript que pode falhar se o número de itens mudar.
- **Melhoria:** Migrar para CSS Grid nativo, eliminando a função `printOurServices`.
- **Impacto:** Alta estabilidade de layout.

#### 2) Performance (Carregamento, Responsividade, SEO)
- **Otimização:** Implementar `priority` na imagem do Hero e converter fontes locais `.ttf` para `.woff2`.
- **Métrica:** Redução do LCP (Largest Contentful Paint) para < 2.5s.

#### 3) Design e UX
- **Melhoria:** Aumentar o contraste dos CTAs (Call to Action) e melhorar o espaçamento entre seções.

#### 4) Segurança e Conformidade
- **Ação:** Atualizar o Next.js para v14+ e remover dependências obsoletas como `font-awesome-4.7.0`.

#### 5) Integrações Funcionais
- **Necessário:** Formulário de cotação de seguros integrado com serviço de e-mail (SendGrid ou API interna).

---

### 2.2 Cavtio / Tec (`cavtio` & `tec`)
#### 1) Usabilidade e Navegação
- **Problema:** Menu mobile utiliza `vh` fixo que sobrepõe o conteúdo em telas curtas (ex: iPhone SE).
- **Melhoria:** Utilizar `dvh` (dynamic viewport height) ou layout flexível.

#### 2) Performance
- **Otimização:** Remover `!important` do [Global.scss](file:///c:/Users/HP/Documents/GitHub/templates/cavtio/public/styles/Global.scss) para permitir a aplicação de estilos responsivos fluidos.

#### 3) Design e UX
- **Melhoria:** Refatorar a seção de voluntários para um carrossel em telas menores, evitando rolagem vertical excessiva.

#### 4) Segurança e Conformidade
- **Ação:** Sanitização de entradas de formulários e atualização do Node.js para v18+.

#### 5) Integrações Funcionais
- **Necessário:** Botão de doação via PIX/Stripe e formulário de inscrição para voluntários.

---

### 2.3 Generalis Advocacia (`generalis`)
#### 1) Usabilidade e Navegação
- **Problema:** O uso de `scrollIntoView()` é agressivo e não respeita o foco do teclado.
- **Melhoria:** Implementar navegação via roteamento Next.js ou âncoras suaves com `scroll-behavior: smooth`.

#### 2) Performance
- **Otimização:** Implementar Lazy Loading nas imagens da seção "Onde estamos" e "Sobre nós".

#### 3) Design e UX
- **Melhoria:** Modernizar a tipografia e os ícones das áreas de atuação (usar SVGs leves).

#### 4) Segurança e Conformidade
- **Ação:** Remover rotas de API padrão (`api/hello.js`) e implementar proteção contra CSRF.

#### 5) Integrações Funcionais
- **Necessário:** Agendamento de consultas jurídicas (Calendly ou sistema próprio).

---

## 3. Métricas de Sucesso, Cronograma e Requisitos

### 📊 Métricas de Sucesso Mensuráveis
- **Performance:** Pontuação Lighthouse > 90 em todos os pilares (Performance, Acessibilidade, SEO).
- **Acessibilidade:** Conformidade WCAG 2.1 (AA) sem erros automáticos.
- **Engajamento:** Redução de 20% no Bounce Rate (Taxa de Rejeição) estimado.

### � Cronograma de Implementação (Fases)
1. **Fase 1 (Core):** Atualização de frameworks e correção de bugs críticos de responsividade (1-2 semanas).
2. **Fase 2 (UX/Design):** Refatoração de componentes visuais e implementação de acessibilidade (2-3 semanas).
3. **Fase 3 (Integrações):** Conexão com APIs externas e SEO avançado (3-4 semanas).

### 🛠️ Requisitos Técnicos Gerais
- **Ambiente:** Node.js 18+ (LTS).
- **Styling:** Tailwind CSS (Recomendado para substituir Bootstrap).
- **Linguagem:** TypeScript 5.0 para tipagem estática e segurança.
- **Hospedagem:** Vercel ou Netlify para suporte nativo ao Next.js.

---
*Gerado automaticamente via Trae IDE.*
