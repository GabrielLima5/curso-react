import useUserContext from "../hooks/useUserContext"

// 5 - contexto mais complexo

export default function PageThree(){
    const {user} = useUserContext()
    return(
        <div>
            <h1>Página 3</h1>
            <span>Valor atual do user: {user}</span>
        </div>
    )
}