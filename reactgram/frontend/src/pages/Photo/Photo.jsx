import './Photo.css'
import { upload } from '../../utils/config'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage'

import Message from '../../components/Message'
import { getPhotoById, likePhoto, commentPhoto } from '../../slices/photoSlice'
import PhotoItem from '../../components/PhotoItem'
import LikeContainer from '../../components/LikeContainer'
import CommentContainer from '../../components/CommentContainer'
import Loading from '../../components/Loading'

export default function Photo(){
    const { id } = useParams()
    const { user } = useSelector(state => state.auth)
    const { photo, loading, error, message } = useSelector(state => state.photo)
    const dispatch = useDispatch()
    const resetMessage = useResetComponentMessage(dispatch)

    const [commentText, setCommentText] = useState('')

    useEffect(() => {
        dispatch(getPhotoById(id))
    }, [dispatch, id])

    loading && <Loading />

    const handleLike = (e) => {
        dispatch(likePhoto(photo._id))
        resetMessage()
    }

    const handleComment = (e) => {
        e.preventDefault()

        const commentData = {
            comment: commentText,
            id: photo._id
        }

        dispatch(commentPhoto(commentData))
        setCommentText('')
        resetMessage()
    }

    return(
        <div id="photo">
            <PhotoItem photo={photo} />
            <LikeContainer photo={photo} user={user} handleLike={handleLike} />
            <div className="message-container">
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </div>
            {photo.comments && (
                <CommentContainer photo={photo} handleComment={handleComment} commentText={commentText} setCommentText={setCommentText} />
            )}
        </div>
    )
}