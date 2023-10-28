import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

export default function CreatePost(){
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')
    const [formError, setFormError] = useState('')
    
    const navigate = useNavigate()
    const { user } = useAuthValue()

    const {insertDocument, response} = useInsertDocument('posts')

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

        insertDocument({
            title, 
            image, 
            body, 
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })
        
        navigate('/')
    }

    return(
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título</span>
                    <input placeholder="Pense em um bom título..." type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
                </label>
                <label>
                    <span>URL da imagem</span>
                    <input placeholder="Insira a URL da imagem do post" type="text" name="image-url" value={image} onChange={e => setImage(e.target.value)} required />
                </label>
                <label>
                    <span>Conteúdo</span>
                    <input placeholder="Insira a mensagem do post" type="text" name="body" value={body} onChange={e => setBody(e.target.value)} required />
                </label>
                <label>
                    <span>Tags</span>
                    <input placeholder="Insira as tags separadas por vírgula" type="text" name="tags" value={tags} onChange={e => setTags(e.target.value)} required />
                </label>
                {!response.loading && <button className="btn" type="submit">Criar post</button>}
                {response.loading && (
                    <button className="btn" disabled>Aguarde...</button>
                )}
                {response.error || formError && <p className="error">{response.error || formError}</p>}
            </form>
        </div>
    )
}