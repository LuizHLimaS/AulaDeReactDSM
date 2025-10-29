export function Destaque(){
    return(
        <section id="destaque" className="destaque">
            <div className="container destaque__conteudo">
                <div className="destaque__texto">
                    <p className="destaque__intro">Desenvolvedor Front-End</p>
                    <h1 className="destaque__titulo">Olá, eu sou <span className="destaque__nome">Luiz</span></h1>
                    <p className="destaque__descricao">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim quos autem deleniti ipsam! Ad, dolores. Architecto consectetur totam, minima facere aliquid doloribus quasi pariatur debitis modi iste aperiam voluptatibus!
                    </p>
                    <div className="destaque__botoes">
                        <a href="#projetos" className="botao botao--primario">Ver Projetos</a>
                        <a href="#" className="botao" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className="destaque__foto">
                    <img src="/profile.jpg" alt="Foto de perfil" />
                </div>
            </div>
        </section>
    )
}