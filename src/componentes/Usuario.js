import { useState } from "react"

export default function Usuario(){
    const [user, setUser] = useState("Catana");
    const [link, setLink] = useState("assets/img/catanacomics.svg")

    function meuEvento(){
        let a = (prompt("Informe o nome de usuário: "))
        if(a){
            setUser(a)
        }
    }

    function mudarPerfil(){
        let a = (prompt("Informe um link para atualizar o perfil: "))
        if(a){
            setLink(a)
        }
    }
    return (
        <div className="usuario" data-test="user">
                <img data-test="profile-image" src={link} onClick={mudarPerfil}/>
                <div className="texto">
                    <strong>catanacomics</strong>
                    <span data-test="name">
                        {user}
                        <ion-icon test="edit-name" name="pencil" onClick={meuEvento}></ion-icon>
                    </span>
                </div>
            </div>
    )
}

function mudarNome(){
    prompt("Deu Certo: ")
}