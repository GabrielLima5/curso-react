import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

export default function Product(){
    const { id } = useParams()

    // 5 - carregamento individual
    const url = `http://localhost:3002/products/${id}`
    const { data: product, loading, error } = useFetch(url)
    
    return(
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$ {product.price}</p>
                    {/* Nested routes */}
                    <Link to={`/products/${id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
    )
}