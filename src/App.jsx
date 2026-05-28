import { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Specialties from "./components/Specialties.jsx";
import ClinicalStaff from "./components/ClinicalStaff.jsx";
import ModalForm from "./components/ModalForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const seoData = {
    inicio: {
      title: "Portal Saúde | Agendamento Rápido de Consultas e Exames Online",
      description:
        "Agende consultas médicas e exames de forma rápida e descomplicada. Atendimento online com especialistas em clínica geral, cardiologia, pediatria e neurologia. Cuidado completo para toda a família.",
      ogTitle: "Portal Saúde | Agendamento Rápido de Consultas e Exames Online",
      ogDescription:
        "Agende consultas médicas e exames de forma rápida e descomplicada. Atendimento online com especialistas em clínica geral, cardiologia, pediatria e neurologia.",
    },
    especialidades: {
      title:
        "Especialidades Médicas | Tratamentos Completos e Cuidados de Saúde",
      description:
        "Conheça nossas especialidades médicas: cardiologia, pediatria, neurologia, ortopedia, dermatologia e muito mais. Tratamentos personalizados com profissionais qualificados.",
      ogTitle:
        "Especialidades Médicas | Tratamentos Completos e Cuidados de Saúde",
      ogDescription:
        "Conheça nossas especialidades médicas: cardiologia, pediatria, neurologia, ortopedia, dermatologia e muito mais. Tratamentos personalizados com profissionais qualificados.",
    },
    "corpo-clinico": {
      title: "Corpo Clínico | Médicos Especialistas Qualificados e Experientes",
      description:
        "Conheça nossa equipe de médicos especialistas: cardiologistas, pediatras, neurologistas e outros profissionais altamente qualificados. Cuidado humanizado e atendimento de excelência.",
      ogTitle:
        "Corpo Clínico | Médicos Especialistas Qualificados e Experientes",
      ogDescription:
        "Conheça nossa equipe de médicos especialistas: cardiologistas, pediatras, neurologistas e outros profissionais altamente qualificados. Cuidado humanizado e atendimento de excelência.",
    },
  };

  const currentSeo = seoData[activeTab] || seoData.inicio;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta property="og:title" content={currentSeo.ogTitle} />
        <meta property="og:description" content={currentSeo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openModal={openModal}
      />
      <main>
        {activeTab === "inicio" ? (
          <Hero openModal={openModal} />
        ) : activeTab === "especialidades" ? (
          <Specialties />
        ) : (
          <ClinicalStaff />
        )}
      </main>
      <Footer />
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />

      {/* LGPD Cookie Consent Banner */}
      <CookieConsent
        location="bottom"
        buttonText="Aceitar e Continuar"
        cookieName="portalSaudeCookieConsent"
        style={{ background: "#2563eb" }}
        buttonStyle={{
          background: "#ea580c",
          color: "white",
          fontSize: "14px",
          borderRadius: "8px",
          padding: "8px 16px",
        }}
        expires={365}
        onAccept={() => {
          // Aqui você pode ativar scripts de rastreamento se necessário
          console.log("Cookies aceitos");
        }}
        onDecline={() => {
          console.log("Cookies recusados");
        }}
        enableDeclineButton
        declineButtonText="Recusar"
        declineButtonStyle={{
          background: "transparent",
          color: "white",
          fontSize: "14px",
          border: "1px solid white",
          borderRadius: "8px",
          padding: "8px 16px",
        }}
      >
        <span style={{ color: "white", fontSize: "14px" }}>
          Usamos cookies para melhorar sua experiência e personalizar anúncios.
          Ao continuar navegando, você concorda com a nossa Política de
          Privacidade.
        </span>
      </CookieConsent>
    </div>
  );
}

export default App;
