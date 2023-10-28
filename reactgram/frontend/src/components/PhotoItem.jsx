import './PhotoItem.css'

import { upload } from '../utils/config'
import { Link } from 'react-router-dom'

export default function PhotoItem({photo}){
    return(
        <div className="photo-item">
            {photo.image && (
                <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
            )}
            <h2>{photo.title}</h2>
            <p className="photo-author">
                Publicada por: <Link to={`/users/${photo.userId}`}> {photo.username}</Link>
            </p>
        </div>
    )
}