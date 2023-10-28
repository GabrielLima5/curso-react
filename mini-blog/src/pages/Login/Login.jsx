import styles from './Login.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'
import { useState, useEffect } from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login, error: authError, loading } = useAuthentication()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        const user = {
            email,
            password
        }

        const res = await login(user)
    }

    useEffect(() => {
        if (authError){
            setError(authError)
        }
    }, [authError])

    return(
       <div className={styles.login}>
            <h1>Entrar</h1>
            <p>Faça login para criar e visualizar posts!</p>
            <form onSubmit={handleSubmit}>
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
                {!loading && <button className="btn" type="submit">Entrar</button>}
                {loading && <button className="btn" disabled type="submit">Aguarde</button>}
                {error && <p className="error">{error}</p>}
            </form>
       </div>
    )
}