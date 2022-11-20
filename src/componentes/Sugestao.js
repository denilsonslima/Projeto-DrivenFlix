export default function Sugestao() {
    const sugestao = [
        { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes" },
        { imagem: "assets/img/chibirdart.svg", nome: "chibirdart" },
        { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar" },
        { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals" },
        { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats" }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestao.map((s) => <UsuarioSugestao key={s.nome} imagem={s.imagem} nome={s.nome} />)}

        </div>
    )
}

function UsuarioSugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagem} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}