import './RenderPhoto.css'
import LikeContainer from './LikeContainer'
import PhotoItem from './PhotoItem'
import { Link } from 'react-router-dom'

import { useResetComponentMessage } from '../hooks/useResetComponentMessage'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { likePhoto } from '../slices/photoSlice'

export default function RenderPhoto({photos, fn, search}){
    const dispatch = useDispatch()
    const resetMessage = useResetComponentMessage(dispatch)
    const {user} = useSelector((state) => state.auth)

    // load all photos
    useEffect(() => {
        dispatch(fn())
    }, [dispatch])
    
    const handleLike = (photo) => {
        dispatch(likePhoto(photo._id))
        resetMessage()
    }

    return(
        <div id="photo">
            {search && <h2>Você está buscando por: {search}</h2>}
            {photos?.map((photo) => (
                <div key={photo._id}>
                    <PhotoItem photo={photo} />
                    <LikeContainer photo={photo} user={user} handleLike={handleLike} />
                    <Link className="btn" to={`/photos/${photo._id}`}>Ver mais</Link>
                </div>
            ))}
            {photos.length === 0 && !search ? (
                <h2 className="no-photos">
                    Ainda não há fotos publicadas. <Link to={`/users/${user._id}`}>Seja o primeiro a publicar.</Link>
                </h2>
            ) : (
                <h2 className="no-photos">
                    Não foram encontrados resultados para sua busca.
                </h2>
            )}
        </div>
    )
}