import { api, requestConfig } from '../utils/config'

const publishPhoto = async (data, token) => {
    const config = requestConfig('POST', data, token, true)

    try {
        const res = await fetch(`${api}/photos`, config)
            .then((res) => res.json())
            .catch(err => console.error(err))

        return res
    } catch (e) {
        console.error(e)
    }
}

const getUserPhotos = async (id, token) => {
    const config = requestConfig('GET', null, token)

    try {
        const res = await fetch(`${api}/photos/user/${id}`, config)
            .then(res => res.json())
            .catch(err => console.error(err))

        return res
    } catch (e) {
        console.error(e)
    }
}

const getPhotoById = async (id, token) => {
    const config = requestConfig('GET', null, token)

    try{
        const res = await fetch(`${api}/photos/${id}`, config)
            .then(res => res.json())
            .catch(err => console.error(err))

        return res
    } catch(e){
        console.error(e)
    }
}

const editPhoto = async (data, id, token) => {
    const config = requestConfig('PUT', data, token)

    try{
        const res = await fetch(`${api}/photos/${id}`, config)
            .then(res => res.json())
            .catch(err => console.error(err))
        
        return res
    } catch(e){
        console.error(e)
    }
}

const deletePhoto = async (id, token) => {
    const config = requestConfig('DELETE', null, token)

    try {
        const res = await fetch(`${api}/photos/${id}`, config)
            .then(res => res.json())
            .catch(err => console.error(err))

        return res
    } catch (e) {
       console.error(e) 
    }
}

const likePhoto = async (id, token) => {
    const config = requestConfig('PUT', null, token)

    try {
        const res = await fetch(`${api}/photos/like/${id}`, config)
            .then((res) => res.json())
            .catch(err => err)

        return res
    } catch (e) {
        console.error(e)
    }
}

const commentPhoto = async (data, id, token) => {
    const config = requestConfig('PUT', data, token)

    try {
       const res = await fetch(`${api}/photos/comment/${id}`, config)
            .then(res => res.json())
            .catch(err => err)

        return res
    } catch (e) {
        console.error(e)
    }
}

const getAllPhotos = async (token) => {
    const config = requestConfig('GET', null, token)

    try {
        const res = await fetch(`${api}/photos`, config)
            .then(res => res.json())
            .catch(err => err)

        return res
    } catch (e) {
        console.error(e)
    }
}

const searchPhotos = async (query, token) => {
    const config = requestConfig('GET', null, token)

    try {
        const res = await fetch(`${api}/photos/search?q=${query}`, config)
            .then(res => res.json())
            .catch(err => err) 

        return res
    } catch (e) {
        console.error(e)
    }
}

const photoService = {
    publishPhoto,
    getUserPhotos,
    deletePhoto,
    editPhoto,
    getPhotoById,
    likePhoto,
    commentPhoto,
    getAllPhotos,
    searchPhotos
}

export default photoService