import { useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"

export default function Search(){
    const [searchParams] = useSearchParams()
    const url = `http://localhost:3002/products?${searchParams}`
    const {data: items, loading, error} = useFetch(url)

    return(
        <div>
            <h1>Resultados disponíveis</h1>
            {items && items.map(item => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </div>
    )
}