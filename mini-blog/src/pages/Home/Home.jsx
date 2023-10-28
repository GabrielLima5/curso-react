import styles from './Home.module.css'

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetails from '../../components/PostDetails'

export default function Home(){
    const [query, setQuery] = useState('')
    const { documents: posts, loading } = useFetchDocuments('posts')
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        if (query) {
            return navigate(`/search/q=${query}`)
        }
    }

    return(
        <div className={styles.home}>
            <h1>Veja os posts mais recentes!</h1>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Busque por tags" />
                <button className="btn btn-dark" type="submit">Pesquisar</button>
            </form>
            <div>
                <h2 className={styles.h2}>Posts</h2>
                {loading && <p>Carregando...</p>}
                {posts && posts.length > 0 && posts.map(post => (
                    <PostDetails key={post.id} image={post.image} tags={post.tags} createdBy={post.createdBy} title={post.title} id={post.id} />
                ))}

                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts...</p>
                        <Link to="/posts/create">Crie seu primeiro post!</Link>
                    </div>
                )}
            </div>
        </div>
    )
}