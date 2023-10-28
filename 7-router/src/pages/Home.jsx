import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import './Home.css'

export default function Home(){
    // carregamento de dados
    const url = 'http://localhost:3002/products'
    const { data: items, loading, error } = useFetch(url)

    return(
        <div>
            <h1>Home</h1>
            {error && <p>{error}</p>}
            
            <ul>
                {items && items.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>
                        {/* Rota dinâmica */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>  
    )
}