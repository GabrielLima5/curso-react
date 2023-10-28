import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // cleanup
    // deal with memory leak
    
    const auth = getAuth()
    
    const [cancel, setCancel] = useState(false)
    
    function checkIfIsCancelled(){
        if (cancel){
            return
        }
    }

    // register
    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError('')

        try{
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            setLoading(false)
            return user
        } catch(e) {
            console.error(e.message)

            let systemErrorMessage;
            
            if (e.message.includes('password')){
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres.'
            } else if (e.message.includes('email-already')){
                systemErrorMessage = 'Usuário já cadastrado.'
            } else {
                systemErrorMessage = 'Ocorreu um erro. Por favor, tente mais tarde.'
            }

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    // sign out
    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    // sign in
    const login = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError('')

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (e) {
            console.error(e.message)

            let systemErrorMessage;
            
            if (e.message.includes('found')){
                systemErrorMessage = 'Usuário não encontrado.'
            } else if (e.message.includes('password')){
                systemErrorMessage = 'Senha incorreta.'
            } else {
                systemErrorMessage = 'Ocorreu um erro. Por favor, tente mais tarde.'
            }

            setError(systemErrorMessage)
            setLoading(false)
        }
    }

    useEffect(() => {
        return () => setCancel(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}