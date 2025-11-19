export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container sobre__conteudo">
        <header className="sobre__cabeca">
          <span className="eyebrow">Quem sou</span>
          <h2 className="sobre__tirulo">Sobre mim</h2>
        </header>
        <div className="sobre__texto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti
          quae excepturi, tempora, possimus sed natus labore reiciendis harum
          aspernatur hic. Corrupti tempora cum veritatis, laborum dolorem
          commodi inventore laboriosam.
        </div>
        <ul className="sobre__infos">
          <li>
            <span>
              <strong>Foco</strong>
              <p>Front-end React</p>
            </span>
          </li>
          <li>
            <span>
              <strong>Local</strong>
              <p>Brasil Remoto / Presencial</p>
            </span>
          </li>
          <li>
            <span>
              <strong>Stack</strong>
              <p>HTML, CSS, JS, React</p>
            </span>
          </li>
          <li>
            <span>
              <strong>Estudando</strong>
              <p>Acessibilidade e UI</p>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
