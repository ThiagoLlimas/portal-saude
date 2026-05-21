import drCarlos from "../assets/dr.carlos.svg";
import draAna from "../assets/dra.ana.svg";
import drPedro from "../assets/dr.pedro.svg";
import draBeatriz from "../assets/dra.beatriz.svg";
import drLucas from "../assets/dr.lucas.svg";
import draMariana from "../assets/dra.mariana.svg";

export default function ClinicalStaff() {
  const staff = [
    {
      name: "Dr. Carlos Silva",
      specialty: "Cirurgião Geral",
      image: drCarlos,
    },
    {
      name: "Dra. Ana Oliveira",
      specialty: "Cardiologista",
      image: draAna,
    },
    {
      name: "Dr. Pedro Santos",
      specialty: "Pediatra",
      image: drPedro,
    },
    {
      name: "Dra. Beatriz Costa",
      specialty: "Neurologista",
      image: draBeatriz,
    },
    {
      name: "Dr. Lucas Almeida",
      specialty: "Ortopedista",
      image: drLucas,
    },
    {
      name: "Dra. Mariana Rocha",
      specialty: "Clínica Geral",
      image: draMariana,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 py-20 px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Título Imponente */}
        <div className="text-center mb-20">
          <h1 className="text-4xl min-[526px]:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-950 tracking-tight mb-8">
            CORPO CLÍNICO
          </h1>
          <div className="w-32 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              {/* Imagem do profissional */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-contain mx-auto animate-sway rounded-full bg-gray-50 border border-gray-100 mb-6"
              />

              {/* Informações do profissional */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
