import styles from './Post.module.css'

import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export default function Post(){
    const { id } = useParams()
    const { document: post, loading } = useFetchDocument('posts', id)

    return(
        <div className={styles.post_container}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Esse post trata sobre:</h3>
                    {/* <div className={styles.tags}>
                        {post.tagsArray.map(tag => {
                            <p key={tag.id}>
                                <span>#</span>{tag}
                            </p>
                        })}
                    </div> */}
                    <p className="error">Ocorreu um problema com as tags. Estamos trabalhando para corrigi-lo.</p>
                </>
            )}
        </div>
    )
}