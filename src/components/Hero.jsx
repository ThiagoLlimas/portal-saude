import { ArrowRight } from "lucide-react";
// Aqui nós "puxamos" a imagem lá da pasta assets
import hospitalImg from "../assets/hospital.svg";

export default function Hero({ openModal }) {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-emerald-50 overflow-hidden">
      {/* CAMADA DE FUNDO (z-0): Onde a ilustração entra */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        {/* A tag img puxando o nosso SVG. O object-bottom garante que o prédio fique colado no chão */}
        <img
          src={hospitalImg}
          alt="Ilustração de um Hospital"
          className="w-full max-w-7xl object-contain object-bottom opacity-90 drop-shadow-xl animate-float"
        />
      </div>

      {/* CAMADA DE CONTEÚDO (z-10): Flutua por cima */}
      <div className="relative z-10 w-full h-full px-8 flex flex-col justify-center pt-10 min-[400px]:pt-2 lg:pt-2 pb-[10rem] lg:pb-0">
        <div className="max-w-2xl pb-10 min-[400px]:pb-40 md:pb-[6rem] lg:pb-[7rem] text-center md:text-left">
          <h1 className="text-6xl md:text-[5.5rem] lg:text-8xl font-extrabold text-blue-950 tracking-tight leading-[1.05] mb-6 animate-fade-up delay-100">
            Sua saúde no centro do nosso cuidado.
          </h1>

          <p className="text-xl text-blue-900/80 mb-10 font-medium leading-relaxed max-w-lg animate-fade-up animate-fade-up delay-300 mx-auto md:mx-0">
            Sabemos que o seu bem-estar não pode esperar. Oferecemos um corpo
            clínico especializado e um sistema ágil para você Agendar consultas
            e exames com total praticidade.
          </p>

          <button
            onClick={openModal}
            className="bg-orange-600 text-white px-8 py-4 rounded-md font-bold flex items-center gap-3 hover:bg-orange-700 transition-colors shadow-xl text-lg cursor-pointer w-max group pointer-events-auto animate-fade-up animate-fade-up delay-500 mx-auto md:mx-0"
            aria-label="Agendar consulta"
          >
            Agendar Minha Consulta
            <ArrowRight
              size={24}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
