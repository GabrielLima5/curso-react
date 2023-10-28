export default function UserDetails({name, age, profession}){
    return(
        <>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {profession}</li>
                {age >= 18 ? <p>Você pode tirar a CNH!</p> : <p>Você ainda não pode tirar a CNH.</p>}
            </ul>
            <hr />
        </>
    )
}