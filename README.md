# 🏥 Portal Saúde — Interface Médica Inteligente & Funcional

> Uma Single Page Application (SPA) para portais de saúde e clínicas médicas que desafia o design tradicional. O projeto equilibra uma paleta de cores corporativa e confiável com uma estética moderna baseada em ilustrações SVG estilo *cartoon*, criando uma experiência de usuário acolhedora e exclusiva.

---

## 🚀 Demonstração Visual

<img width="3784" height="1996" alt="image" src="https://github.com/user-attachments/assets/4fa8539e-4312-46be-8dea-7cbb3ed21448" />


---

## 🎨 Conceito Visual e Diferenciais de Design

*   **Estética "Cartoon-Sticker":** Uso estratégico de vetores SVG customizados como "figurinhas", conferindo um aspecto leve, exótico e altamente memorável à interface.
*   **Acessibilidade e Fluidez:** Tipografia legível com forte contraste, layouts responsivos construídos com **Tailwind CSS** e microanimações fluidas via **React**.
*   **Atribuição Ética:** Rodapé estruturado com links de créditos e menções formais às plataformas de origem dos vetores e SVGs utilizados.

---

## 📂 Arquitetura da Aplicação (Módulos de Navegação)

A aplicação é dividida em três abas principais, focadas na jornada do paciente:

### 1. Início (Home)
Seção de introdução com chamada de impacto (Headline e Subheadline) e botão de Call to Action (CTA) dinâmico que aciona o formulário inteligente de agendamento.
*(Monitore também o banner inferior de conformidade legal de cookies e privacidade).*

<img width="3828" height="746" alt="Captura de tela 2026-06-08 163649" src="https://github.com/user-attachments/assets/67249ed0-9824-4d16-a2de-f95766f85563" />


### 2. Especialidades
Exibição modular dos serviços médicos e tratamentos oferecidos pela clínica, permitindo que o usuário visualize cards descritivos detalhados para cada área médica.

<img width="3822" height="1842" alt="Captura de tela 2026-06-08 163707" src="https://github.com/user-attachments/assets/e35b2cfe-c179-44f1-b63f-7b6abf38f599" />


### 3. Corpo Clínico
Grid dedicado à apresentação detalhada dos especialistas da clínica, utilizando avatares customizados no padrão visual do portal.

<img width="3820" height="1850" alt="Captura de tela 2026-06-08 163737" src="https://github.com/user-attachments/assets/c170013f-a96d-4cc7-8d45-0115b9503c5e" />


---

## 🛠️ Engenharia de Software e Integrações

Este projeto vai muito além do front-end visual, englobando uma esteira completa de automação de dados e segurança:

*   **Data Automation (Formulário -> API -> Planilha):** O formulário de contato foi codificado de forma personalizada e integrado a uma API conectada ao **Google Sheets**. Cada novo lead ou agendamento atualiza a planilha em tempo real automaticamente.
*   **Notificação Automatizada (Gmail SMTP):** No momento em que o cadastro é validado e aceito, o sistema dispara um e-mail de notificação instantâneo contendo todas as informações do cliente diretamente para o e-mail do administrador.
*   **Segurança Invisível com reCAPTCHA v3:** Implementação do sistema de proteção contra bots e spans da Google rodando de forma assíncrona por baixo da interface do usuário (resguardado abaixo do menu de cookies).
*   **Métricas Diretas (GA4 Native Script):** Monitoramento de tráfego configurado via injeção direta do script do **Google Analytics 4 (GA4)** no código, coletando dados de navegação sem a dependência de gerenciadores de tags externos.
*   **Otimização de SEO:** Tags semânticas rigorosas para garantir indexação orgânica em motores de busca para termos relacionados a clínicas e serviços de saúde.

---

## 💻 Stack Tecnológica

| Tecnologia | Função no Ecossistema |
| :--- | :--- |
| **React** | Biblioteca core para renderização de componentes e controle de abas dinâmicas. |
| **Vite** | Ambiente de build de alta velocidade para desenvolvimento moderno. |
| **Tailwind CSS** | Estilização utilitária focada em performance e total responsividade. |
| **Google Sheets API** | Banco de dados auxiliar para armazenamento imediato de leads. |
| **Google reCAPTCHA v3** | Mecanismo de pontuação de segurança e prevenção de spam em formulários. |
| **GA4 Script** | Coleta direta de métricas de comportamento do usuário. |

---

## 🔗 Links Oficiais do Projeto

*   🌍 **Acesse o Portal em Produção:** https://portal-saude-page.vercel.app/
*   💼 **Desenvolvedor Responsável:** [LinkedIn](https://www.linkedin.com/in/thiago-lima-271138270/)
*   💻 **Confira meu Portfólio Principal:** [Thiago.dev](https://thiagolima-dev.vercel.app/)
*   💬 **Orçamentos e Contato:** [Conversar no WhatsApp](https://wa.me/5531995263774)
