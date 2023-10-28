// CSS
import './Profile.css'

// URL
import { upload } from '../../utils/config'

// Components
import Message from '../../components/Message'
import { Link } from 'react-router-dom'
import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'

// Hooks
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

// Redux
import { getUserDetails } from '../../slices/userSlice'
import { publishPhoto, getUserPhotos, deletePhoto, resetMessage, editPhoto } from '../../slices/photoSlice'
import { useResetComponentMessage } from '../../hooks/useResetComponentMessage'
import Loading from '../../components/Loading'

export default function Profile(){
    const { id } = useParams()
    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)
    const { photos, loading: loadingPhoto, message: messagePhoto, error: errorPhoto } = useSelector((state) => state.photo)
    const dispatch = useDispatch()
    const resetMessage = useResetComponentMessage(dispatch)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    
    const [editTitle, setEditTitle] = useState('')
    const [editId, setEditId] = useState('')
    const [editImage, setEditImage] = useState('')

    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    useEffect(() => {
        dispatch(getUserDetails(id))
        dispatch(getUserPhotos(id))
    }, [dispatch, id])

    loading && <Loading />

    const handleFile = e => {
        const image = e.target.files[0]
        setImage(image)
    }

    const handleDeletePhoto = (id) => {
        dispatch(deletePhoto(id))
        resetMessage()
    }

    const toggleForms = () => {
        newPhotoForm.current.classList.toggle('hide')
        editPhotoForm.current.classList.toggle('hide')
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        const photoData = {
            title: editTitle,
            id: editId
        }

        dispatch(editPhoto(photoData))
        resetMessage()
    }

    const handleCancelEdit = (e) => {
        toggleForms()
    }

    const handleEdit = (photo) => {
        if (editPhotoForm.current.classList.contains('hide')){
            toggleForms()
        }

        setEditTitle(photo.title)
        setEditId(photo.id)
        setEditImage(photo.image)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const photoData = {
            title,
            image
        }

        const formData = new FormData()
        const photoFormData = Object.keys(photoData).forEach(key => {
            formData.append(key, photoData[key])
        })
        formData.append('photo', photoFormData)

        dispatch(publishPhoto(formData))
        setTitle('')
        resetMessage()
    }

    return(
        <div id="profile">
            <header className="profile-header">
                {user.profileImage && (
                    <img src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className="profile-description">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </header>
            {id === userAuth._id && (
                <>
                    <div className="new-photo">
                        <h3>Compartilhe algum momento seu!</h3>
                        <form onSubmit={handleSubmit} ref={newPhotoForm}>
                            <label>
                                <span>Título para a foto</span>
                                <input type="text" placeholder="Insira um título" value={title} onChange={e => setTitle(e.target.value)} />
                            </label>
                            <label>
                                <span>Imagem</span>
                                <input type="file" onChange={handleFile} />
                            </label>
                            {!loadingPhoto && <input type="submit" value="Postar" />}
                            {loadingPhoto && <input type="submit" value="Aguarde..." disabled />}
                            {errorPhoto && <Message msg={errorPhoto} type="error" />}
                            {messagePhoto && <Message msg={messagePhoto} type="success" />}
                        </form>
                    </div>
                    <div className="edit-photo hide" ref={editPhotoForm}>
                        <p>Editando:</p>
                        {editImage && (
                            <img src={`${upload}/photos/${editImage}`} alt={editTitle} />
                        )}
                        <form onSubmit={handleUpdate}>
                            <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />

                            <input type="submit" value="Editar" />
                            <button className="cancel-btn" onClick={handleCancelEdit}>Cancelar edição</button>
                        </form>
                    </div>
                </>
            )}
            <div className="user-photos">
                <h2>Fotos publicadas: </h2>
                <div className="photos-container">
                    {photos && photos.map(photo => (
                        <div className="photo" key={photo._id}>
                            {photo.image && (<img src={`${upload}/photos/${photo.image}`} alt={photo.title}></img>)}
                            {id === userAuth._id ? (
                                <div className="actions">
                                    <Link to={`/photos/${photo._id}`}>
                                        <BsFillEyeFill />
                                    </Link>
                                    <BsPencilFill onClick={() => handleEdit(photo)} />
                                    <BsXLg onClick={() => {handleDeletePhoto(photo._id)}} />
                                </div>
                            ) : (
                                <Link className="btn" to={`/photos/${photo._id}`}>Ver</Link>
                            )}
                        </div>
                    ))}

                    {photos.length === 0 && <p>Ainda não há fotos publicadas.</p>}
                </div>
            </div>
        </div>
    )
}