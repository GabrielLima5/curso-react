import styles from './EditPost.module.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

export default function EditPost(){
    const { id } = useParams()
    const { document: post } = useFetchDocument('posts', id)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')
    const [formError, setFormError] = useState('')

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)
            setTags('')
        }
    }, [post])
    
    const navigate = useNavigate()
    const { user } = useAuthValue()

    const { updateDocument, response } = useUpdateDocument('posts', id)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError('')

        // validating image URL
        try {
            new URL(image)
        } catch (e) {
            setFormError('A imagem precisa ser uma URL.')
        }
        
        // criando o array de tags
        const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase())
        
        // checar todos os valores
        if (!title || !image || !tags || !body){
            setFormError('Por favor, preencha todos os campos.')
        }
        
        if (formError) return

        const data = {
            title, 
            image, 
            body, 
            uid: user.uid,
            createdBy: user.displayName
        }

        updateDocument(id, data)
        
        navigate('/dashboard')
    }

    return(
        <div className={styles.edit_post}>
            {post && (
                <>
                    <h2>Editar post: {post.title}</h2>
                    <p>Altere os dados do post como desejar.</p>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <span>Título</span>
                            <input placeholder="Pense em um bom título..." type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
                        </label>
                        <label>
                            <span>URL da imagem</span>
                            <input placeholder="Insira a URL da imagem do post" type="text" name="image-url" value={image} onChange={e => setImage(e.target.value)} required />
                        </label>
                        <p className={styles.preview_title}>Preview da imagem atual:</p>
                        <img className={styles.image_preview} src={post.image} alt={post.title} />
                        <label>
                            <span>Conteúdo</span>
                            <input placeholder="Insira a mensagem do post" type="text" name="body" value={body} onChange={e => setBody(e.target.value)} required />
                        </label>
                        <label>
                            <span>Tags</span>
                            <input placeholder="Insira as tags separadas por vírgula" type="text" name="tags" value={tags} onChange={e => setTags(e.target.value)} required />
                        </label>
                        {!response.loading && <button className="btn" type="submit">Editar</button>}
                        {response.loading && (
                            <button className="btn" disabled>Aguarde...</button>
                        )}
                        {response.error || formError && <p className="error">{response.error || formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}