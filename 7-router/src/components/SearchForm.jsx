import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function SearchForm(){
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault()
        navigate('/search?q=' + query)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
    )
}