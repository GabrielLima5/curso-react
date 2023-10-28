import './Auth.css'

import { Link } from 'react-router-dom'
import Message from '../../components/Message'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../../slices/authSlice'

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const dispatch = useDispatch()

    const { loading, error } = useSelector((state) => state.auth)

    const handleSubmit = e => {
        e.preventDefault()

        const user = {
            name,
            email,
            password,
            confirmPassword
        }

        console.log(user)
        dispatch(register(user))
    }

    useEffect(() => {
        dispatch(reset())
    }, [dispatch])

    return(
        <div id="register">
            <h2>ReactGram</h2>
            <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" />
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" />
                {!loading && <input type="submit" value="Cadastrar" />}
                {loading && <input type="submit" value="Aguarde..." disabled />}
                {error && <Message msg={error} type="error" />}
            </form>
            <p>Já tem conta? <Link to="/login">Clique aqui.</Link></p>
        </div>
    )
}