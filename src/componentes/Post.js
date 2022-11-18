export default function Post() {
    const post = [
        { imagem: "assets/img/meowed.svg", user: "meowed", conteudo: "assets/img/gato-telefone.svg", logo: "assets/img/respondeai.svg", info: "respondeai", like: "outras 101.523 pessoas" },
        { imagem: "assets/img/barked.svg", user: "barked", conteudo: "assets/img/dog.svg", logo: "assets/img/adorable_animals.svg", info: "adorable_animals", like: "outras 99.159 pessoas" }
    ]
    return (
        <div class="posts">
            {post.map((p)=> <Posts post={p} />)}
        </div>
    )
}

function Posts(props){
    return (
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.post.imagem} />
                        {props.post.user}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.post.conteudo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.post.logo} />
                        <div class="texto">
                            Curtido por <strong>{props.post.info}</strong> e <strong>{props.post.like}</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}