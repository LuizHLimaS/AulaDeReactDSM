const skills = [
    {nome: "React", nivel: 50},
    {nome: "JS", nivel: 60},
    {nome: "TS", nivel: 60},
    {nome: "Node.JS", nivel: 40},
    {nome: "C#", nivel: 30},
    {nome: "Python", nivel: 10},
    {nome: "Angular", nivel: 0},
    {nome: "MySQL", nivel: 40},
]

const tecnologias = [
    "React", "JS", "TS", "Node.JS", "C#", "Python", "Angular", "MySQL", "Java", "PostgreSQL", "Git", "HTML", "CSS"
]

export default function Habilidades(){
    return(
        <section id="habilidades" className="habilidades">
            <div className="container">
                <header className="habilidades_cabeca">
                    <span className="eyebrow">O que sei fazer</span>
                    <h2 className="habilidades-titulo">Habilidades</h2>
                </header>
                <ul className="habilidades_barras" aria-label="Barras de Proficîencia">
                    {skills.map((s)=>(
                        <li key={s.nome} className="habilidade">
                            <div className="hablidade_topo">
                                <span className="habilidade_nome">
                                    {s.nome}
                                </span>
                                <span className="habilidade_percentual" aria-hidden="true">
                                    {s.nivel}%
                                </span>
                            </div>
                            <div className="habilidade__bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={s.nivel} aria-label={`Proficiencia em ${s.nome}:${s.nivel}%`}>
                                <div className="habilidade__fill" style={{width: `${s.nivel}%`}}/>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="habilidades__tecnologias">
                    {tecnologias.map((t) => (
                        <span key={t} className="tech">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}