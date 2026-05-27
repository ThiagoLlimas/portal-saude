export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center font-sans">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-3">
        <p className="font-medium text-slate-300">
          &copy; 2026 PortalSaúde. Todos os direitos reservados.
        </p>
        <p className="text-sm text-slate-400 mt-2">
          Atendimento humanizado e tecnologia a serviço da sua vida e da sua
          família.
        </p>

        {/* Atribuições obrigatórias, bem discretas e elegantes */}
        <div className="flex items-center gap-2 text-xs opacity-50 hover:opacity-100 transition-all">
          <a
            href="https://storyset.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-all"
          >
            Medical illustrations by Storyset
          </a>
          <span>•</span>
          <a
            href="https://www.flaticon.com/free-animated-icons/heart"
            target="_blank"
            rel="noreferrer"
            title="heart animated icons"
            className="hover:text-emerald-400 transition-all"
          >
            Heart animated icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
    </footer>
  );
}
