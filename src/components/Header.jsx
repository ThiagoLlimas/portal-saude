import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ activeTab, setActiveTab, openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-8 py-5 bg-transparent absolute w-full z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 text-blue-600">
        <Activity size={28} />
        <span className="text-xl font-bold tracking-tight">PortalSaúde</span>
      </div>

      {/* Menu de Navegação */}
      <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
        <button
          onClick={() => setActiveTab("inicio")}
          className={`hover:text-blue-700 transition-colors cursor-pointer ${
            activeTab === "inicio" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Início
        </button>
        <button
          onClick={() => setActiveTab("especialidades")}
          className={`hover:text-blue-700 transition-colors cursor-pointer ${
            activeTab === "especialidades" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Especialidades
        </button>
        <button
          onClick={() => setActiveTab("corpo-clinico")}
          className={`hover:text-blue-700 transition-colors cursor-pointer ${
            activeTab === "corpo-clinico" ? "text-blue-600" : "text-gray-600"
          }`}
        >
          Corpo Clínico
        </button>
      </nav>

      {/* Botão de Ação - Desktop */}
      <button
        onClick={openModal}
        className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg cursor-pointer"
      >
        Agendar Consulta
      </button>

      {/* Botão Menu Mobile */}
      <button
        className="md:hidden text-gray-600 hover:text-blue-700 transition-colors cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Menu Dropdown Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 md:hidden">
          <div className="flex flex-col items-center text-center gap-4">
            <button
              onClick={() => handleNavigation("inicio")}
              className={`text-gray-600 hover:text-blue-700 transition-colors font-medium cursor-pointer ${
                activeTab === "inicio" ? "text-blue-600" : ""
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation("especialidades")}
              className={`text-gray-600 hover:text-blue-700 transition-colors font-medium cursor-pointer ${
                activeTab === "especialidades" ? "text-blue-600" : ""
              }`}
            >
              Especialidades
            </button>
            <button
              onClick={() => handleNavigation("corpo-clinico")}
              className={`text-gray-600 hover:text-blue-700 transition-colors font-medium cursor-pointer ${
                activeTab === "corpo-clinico" ? "text-blue-600" : ""
              }`}
            >
              Corpo Clínico
            </button>
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg cursor-pointer"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
