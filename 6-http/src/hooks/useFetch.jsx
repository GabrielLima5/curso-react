import { useState, useEffect } from 'react'

// custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // refatorando post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    
    // loading
    const [loading, setLoading] = useState(false)
    
    // error
    const [error, setError] = useState(null)
    
    // desafio 6
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {
        if (method === 'POST'){
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        } else if (method === 'DELETE'){
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try{
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            } catch(e){
                console.error(e.message)
                setError('Houve um erro, tente novamente!')
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    // refatorando post
    useEffect(() => {
        const postData = async () => {
            if (method === 'POST'){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)  
                const data = await res.json()
                setCallFetch(data)
            } else if (method === 'DELETE'){
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(json)
            }
        }

        postData()
    }, [config, method, url])

    return { data, httpConfig, loading, error }
}