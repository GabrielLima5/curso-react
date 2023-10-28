import styles from './Search.module.css'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

import PostDetails from '../../components/PostDetails'

export default function Search(){
    const query = useQuery()
    const search = query.get('q')

    const { documents: posts } = useFetchDocuments('posts', search)

    return(
        <div>
            <h2>Search</h2>
            <div className={styles.search_container}>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className="btn btn-dark">Volta</Link>
                    </div>
                )}
                {posts && posts.map(post => {
                    <PostDetails key={post.id} post={post} />
                })}
            </div>
        </div>
    )
}