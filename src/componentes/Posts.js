import { useState } from "react"
export default function Posts(props){
    const [salvar, setSalvar] = useState("bookmark-outline")
    const [curtir, setCurtir] = useState("heart-outline")

    function salvarPost(){
        let clicado = "bookmark"
        let desClicado = "bookmark-outline"
        if(salvar == desClicado){
            setSalvar(clicado)
        } else setSalvar(desClicado) 
    }

    function curtirPost(){
        let clicado = "heart"
        let desClicado = "heart-outline"
        if(curtir == desClicado){
            setCurtir(clicado)
        } else {
            setCurtir(desClicado)
        }
    }

    return (
        <div className="post" data-test="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.post.imagem} />
                        {props.post.user}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img src={props.post.conteudo} onDoubleClick={()=> setCurtir("heart")}/>
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon data-test="like-post" name={curtir} style={curtir == "heart"? { color: "#ed4956" } : {}} onClick={curtirPost}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" name={salvar} onClick={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.post.logo} />
                        <div className="texto" data-test="likes-number">
                            Curtido por <strong>{props.post.info}</strong> e <strong>{curtir == "heart"? Number(props.post.like) + 1: Number(props.post.like)} </strong> pessoas
                        </div>
                    </div>
                </div>
            </div>
    )
}