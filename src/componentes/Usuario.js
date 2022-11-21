import { useState } from "react"

export default function Usuario() {
    const [user, setUser] = useState("Catana");
    const [link, setLink] = useState("assets/img/catanacomics.svg")

    return (
        <div className="usuario" data-test="user">
            <img data-test="profile-image" src={link} onClick={() =>{
                const a = prompt("Informe um link para atualizar o perfil: ");
                return a? setLink(a): null
            }}/>
            <div className="texto" data-test="name">
                <strong>catanacomics</strong>
                <span>
                    {!user ? setUser : user}
                    <ion-icon data-test="edit-name" name="pencil" onClick={() => {
                        const a = prompt("Informe o nome de usuário: ");
                        return a ? setUser(a) : null
                    }}></ion-icon>
                </span>
            </div>
        </div>
    )
}