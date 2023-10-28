import { useState } from 'react'
import './MyForm.css'

export default function MyForm({user}){
    // gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    function handleSubmit(e){
        e.preventDefault()
        console.log('Enviando o formulário!')
        console.log(`Nome: ${name}, Email: ${email}`)
        setName('')
        setEmail('')
        setBio('')
    }

    return(
        <div>
            {/* Criação de forms */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input  type="text" 
                            name="name" 
                            placeholder="Digite o seu nome" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} />
                </div>

                {/* Label envolvendo input */}
                <label>
                    <span>Email</span>
                    <input  type="email" 
                            name="email" 
                            placeholder="Digite o seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                </label>

                {/* Textarea */}
                <label>
                    <span>Biografia:</span>
                    <textarea name="bio" placeholder="Descrição biográfica" value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                </label>

                {/* Select */}
                <label>
                    <span>Cargo</span>
                    <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <button className="btn" type="submit">Enviar</button>
            </form>
        </div>
    )
}