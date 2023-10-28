import { useAuthentication } from '../../hooks/useAuthentication'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'

export default function Register(){
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser, error: authError, loading } = useAuthentication()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword){
            setError('As senhas precisam ser iguais.')
            return
        }

        const res = await createUser(user)
        console.log(res)
    }

    useEffect(() => {
        if (authError){
            setError(authError)
        }
    }, [authError])

    return(
        <div className={styles.register}>
            <h1>Cadastre-se para criar posts!</h1>
            <p>Crie seu usuário e compartilhe suas histórias.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome</span>
                    <input 
                        type="text" 
                        placeholder="Nome do usuário" 
                        name="displayName" 
                        value={displayName} 
                        onChange={e => setDisplayName(e.target.value)} 
                        required 
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input 
                        type="email" 
                        placeholder="Email do usuário" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required 
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input 
                        type="password" 
                        placeholder="Insira a sua senha" 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required 
                        />
                </label>
                <label>
                    <span>Confirmar senha</span>
                    <input 
                        type="password" 
                        placeholder="Confirme a sua senha" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required 
                    />
                </label>
                {!loading && <button className="btn" type="submit">Cadastrar</button>}
                {loading && <button className="btn" disabled type="submit">Aguarde</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}