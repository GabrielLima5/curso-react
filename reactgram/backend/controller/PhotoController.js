const Photo = require('../model/Photo')
const mongoose = require('mongoose')
const User = require('../model/User')

// insert a photo, with an user related with
const insertPhoto = async (req, res) => {
    const { title } = req.body
    const image = req.file.filename
    const reqUser = req.user
    const user = await User.findById(reqUser._id)

    // creating new photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    })

    if (!newPhoto){
        res.status(422).json({errors: ['Houve um problema. Tente novamente mais tarde.']})
        return
    }

    res.status(201).json(newPhoto)
}

const deletePhoto = async (req, res) => {
    const id = req.params.id
    const reqUser = req.user
    
    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id))

        if (!photo){
            res.status(422).json({errors: ['Foto não encontrada.']})
            return
        }

        if (!photo.userId.equals(reqUser._id)){
            res.status(422).json({errors: ['Ocorreu um erro. Tente novamente mais tarde.']})
        }

        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({
            id: photo._id,
            message: 'Foto excluída com sucesso.'
        })
    } catch (e) {
        res.status(404).json({errors: ['Foto não encontrada.']})
    }
}

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([['createdAt', -1]]).exec()
    return res.status(200).json(photos)
}

const getUserPhotos = async (req, res) => {
    const id = req.params.id
    const userPhotos = await Photo.findById({userId: id}).sort([['createdAt', -1]]).exec()
    return res.status(200).json(userPhotos)
}

const getPhotoById = async (req, res) => {
    const id = req.params.id
    const photo = await Photo.findById(mongoose.Types.ObjectId(id))
    
    if (!photo){
        res.status(404).json({errors: ['Foto não encontrada.']})
        return
    }

    res.status(200).json(photo)
}

const updatePhoto = async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const reqUser = req.user

    const photo = await Photo.findById(id)

    if (!photo){
        res.status(404).json({errors: ['Foto não encontrada']})
        return
    }

    if (!photo.userId.equals(reqUser._id)){
        res.status(422).json({errors: ['Ocorreu um erro. Tente novamente mais tarde.']})
    }

    if (title) photo.title = title

    await photo.save()
    res.status(200).json({ photo, message: 'Foto atualizada com sucesso.'})
}

const likePhoto = async (req, res) => {
    const id = req.params.id
    const reqUser = req.user
    const photo = await Photo.findById(id)

    if (!photo){
        res.status(404).json({errors: ['Foto não encontrada.']})
        return
    }

    if (photo.likes.includes(reqUser._id)){
        res.status(422).json({errors: ['Você já curtiu a foto.']})
    }

    photo.likes.push(reqUser._id)
    await photo.save()
    res.status(200).json({photoId: id, userId: reqUser._id, message: 'Foto curtida.'})
}

const commentPhoto = async (req, res) => {
    const id = req.params.id
    const comment = req.body.comment
    const reqUser = req.user
    
    const user = await User.findById(reqUser._id)
    const photo = await Photo.findById(id)

    if (!photo){
        res.status(404).json({errors: ['Foto não encontrada.']})
        return
    }

    const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id
    }

    photo.comments.push(userComment)
    await photo.save()

    res.status(200).json({
        comment: userComment,
        message: 'Comentário adicionado com sucesso.'
    })
}

const searchPhotos = async (req, res) => {
    const {q} = req.query
    const photos = await Photo.find({title: new RegExp(q, 'i')}).exec()
    res.status(200).json(photos)
}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhoto,
    likePhoto,
    commentPhoto,
    searchPhotos
}