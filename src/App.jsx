import { useState } from "react";
import CookieConsent from "react-cookie-consent";
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
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
