import { useState } from "react"

export default function HookUseState(){
    // 1 - useState
    let username = 'João'
    const [name, setName] = useState('Pedro')

    const changeNames = () => {
        username = 'João Sousa'
        setName('Pedro Castro')
        console.log(username, name)
    }

    // 2 - useState e input
    const [age, setAge] = useState(18)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // envio dos dados para o backend
        console.log(age)
    }

    return(
        <div>
            <h2>useState()</h2>
            <p>Variável: {username}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes</button>
            <form onSubmit={handleSubmit}>
                <label>
                    <span style={{display: 'block', marginTop: '50px'}}>Idade: {age}</span>
                    <input type="text" placeholder="Idade" value={age} onChange={e => setAge(e.target.value)} />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Enviar</button>
            </form>
            <hr />
        </div>
    )
}