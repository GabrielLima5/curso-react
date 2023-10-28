// CSS
import './EditProfile.css'

// Hooks
import { upload } from '../../utils/config'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux
import { profile, resetMessage, updateProfile } from '../../slices/userSlice'

// Components
import Message from '../../components/Message'

export default function EditProfile(){
    const dispatch = useDispatch()
    const { user, message, error, loading } = useSelector((state) => state.user)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [password, setPassword] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
        }
    }, [user])

    const handleFile = e => {
        const image = e.target.files[0]
        setPreviewImage(image)
        setProfileImage(image)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {
            name
        }

        if (profileImage){
            userData.profileImage = profileImage
        }

        if (bio){
            userData.bio = bio
        }

        if (password){
            userData.password = password
        }

        const formData = new FormData()
        const userFormData = Object.keys(userData).forEach(key => {
            formData.append(key, userData[key])
        })

        formData.append('user', userFormData)
        await dispatch(updateProfile(userFormData))

        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }

    return(
        <div id="edit-profile">
            <h2>Edite seus dados</h2>
            <p className="subtitle">Adicione uma imagem de perfil e conte mais sobre você,</p>
            {(user.profileImage || previewImage) && (
                <img className='profile_image' src={previewImage ? URL.createObjectURL(previewImage) : `${upload}/${user.profileImage}`} alt="Profile Img" />
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} disabled />
                <label>
                    <span>Foto de perfil</span>
                    <input type="file" onChange={handleFile} />
                </label>
                <label>
                    <span>Bio</span>
                    <input type="text" placeholder="Descrição do perfil" value={bio} onChange={e => setBio(e.target.value)} />
                </label>
                <label>
                    <span>Alterar senha</span>
                    <input type="password" placeholder="Digite sua nova senha" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                {!loading && <input type="submit" value="Atualizar" />}
                {loading && <input type="submit" value="Aguarde..." disabled />}
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </form>
        </div>
    )
}