export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="container rodape__conteudo">
        <p className="rodape__texto">
          {anoAtual} <strong>Seu nome</strong> Todos os direitos reservado.
        </p>

        <ul className="rodape__links">
          <li>
            <a
              href="https://github.com."
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com."
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
