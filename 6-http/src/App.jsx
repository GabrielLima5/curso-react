import './App.css';
import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch';
const baseUrl = 'http://localhost:3001/products'

function App() {
  const [products, setProducts] = useState([])
  
  const { data: items, httpConfig, loading, error } = useFetch(baseUrl)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // aula 1 - resgatando dados
  /* 
    // COM ASYNC AWAIT
    useEffect(() => {
      async function fetchData(){
        const res = await fetch(baseUrl)
        const data = await res.json()
        setProducts(data)
      }
      
      fetchData()
    }, [])

    // COM PROMISE
    useEffect(() => {
      function fetchData(){
        return new Promise((resolve, reject) => {
          const res = fetch(baseUrl)
          const data = res.json()
          resolve(data)
        })
      }

      fetchData()
        .then(data => setProducts(data))
    }, [])
  */

  // aula 2 - adição de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    }

    /*
      const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
      })

      // aula 3 - carregamento dinamico
      const addProduct = await res.json()
      setProducts(prevProducts => [...prevProducts, addProduct])
    */

    // 5 - refatorando post
    httpConfig(product, 'POST')
    setName('')
    setPrice('')
  }

  // desafio 6
  const handleRemove = (id) => {
    httpConfig(id, 'DELETE')
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items && items.map(product => (
          <li key={product.id}>{product.name} - R${product.price}
            <button onClick={() => handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} name="name" required onChange={e => setName(e.target.value)} />
          </label>
          <label>
            <span>Preço</span>
            <input type="number" value={price} name="price" required onChange={e => setPrice(e.target.value)} />
          </label>
          {!loading && <button type="submit">Criar produto</button>}
          {loading && <button type="button" disabled>Aguarde!</button>}
        </form>
      </div>
    </div>
  );
}

export default App;
