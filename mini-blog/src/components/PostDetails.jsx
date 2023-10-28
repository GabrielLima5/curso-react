import { Link } from 'react-router-dom'
import styles from './PostDetails.module.css'

export default function PostDetails({image, title, createdBy, id}){
    return(
        <div className={styles.post_detail}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p className={styles.createdby}>{createdBy}</p>
            <Link to={`/posts/${id}`} className="btn btn-outline">Ler</Link>
        </div>
    )
}