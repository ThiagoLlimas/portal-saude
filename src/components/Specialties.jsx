import { Stethoscope, HeartPulse, Baby, Brain } from "lucide-react";
import medicalSvg from "../assets/medical.svg";

export default function Specialties() {
  const specialties = [
    {
      icon: <Stethoscope size={24} />,
      title: "Clínica Geral",
      description:
        "Consultas de rotina, avaliações completas e encaminhamentos especializados.",
    },
    {
      icon: <HeartPulse size={24} />,
      title: "Cardiologia",
      description:
        "Cuidado completo da saúde cardiovascular com exames de precisão.",
    },
    {
      icon: <Baby size={24} />,
      title: "Pediatria",
      description:
        "Atendimento acolhedor e especializado para acompanhar o desenvolvimento saudável de crianças e adolescentes.",
    },
    {
      icon: <Brain size={24} />,
      title: "Neurologia",
      description:
        "Diagnóstico preciso e tratamento integrado com foco na qualidade de vida e saúde do sistema nervoso.",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Título Imponente - Layout "T" */}
        <div className="text-center mb-15">
          <h1 className="text-4xl min-[526px]:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-950 tracking-tight mb-8">
            ESPECIALIDADES
          </h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Conteúdo Dividido 50/50 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Lado Esquerdo - Texto e Lista */}
          <div className="space-y-8">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Cuidado completo para toda a família
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Oferecemos atendimento humanizado e de excelência. Nossa equipe
                de especialistas está preparada para cuidar da sua saúde com
                tecnologia de ponta e abordagem centrada no paciente.
              </p>
            </div>

            {/* Lista de Especialidades */}
            <div className="space-y-6 w-full max-w-2xl mx-auto lg:mx-0">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:bg-white/80"
                >
                  <div className="text-blue-600 mt-1 flex-shrink-0">
                    {specialty.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito - Ilustração Médica */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 lg:h-[500px] flex items-center justify-center animate-breathe">
              <img
                src={medicalSvg}
                alt="Ilustração Médica - Especialidades"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
