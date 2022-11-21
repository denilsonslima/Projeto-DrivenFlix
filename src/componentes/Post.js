import Posts from "./Posts"

export default function Post() {
    const post = [
        { imagem: "assets/img/meowed.svg", user: "meowed", conteudo: "assets/img/gato-telefone.svg", logo: "assets/img/respondeai.svg", info: "respondeai", like: "101523" },
        { imagem: "assets/img/barked.svg", user: "barked", conteudo: "assets/img/dog.svg", logo: "assets/img/adorable_animals.svg", info: "adorable_animals", like: "99159" }
    ]
    return (
        <div className="posts">
            {post.map((p)=> <Posts key={p.user} post={p} />)}
        </div>
    )
}

