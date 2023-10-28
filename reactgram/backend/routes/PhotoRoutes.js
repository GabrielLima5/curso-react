const express = require('express')
const router = express.Router()

const { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, commentPhoto, searchPhotos } = require('../controller/PhotoController')
const { photoInsertValidation, photoUpdateValidation, commentValidation } = require('../middlewares/photoValidation')
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation')
const { imageUpload } = require('../middlewares/imageUpload')

router.post('/', authGuard, imageUpload.single('image'), photoInsertValidation(), validate, insertPhoto)

router.delete('/:id', authGuard, deletePhoto)

router.get('/', getAllPhotos)

router.get('/user/:id', getUserPhotos)

router.get('/search', searchPhotos)

router.get('/:id', getPhotoById)

router.put('/:id', authGuard, photoUpdateValidation(), validate, updatePhoto)

router.put('/like/:id', authGuard, likePhoto)

router.put('/comment/:id', authGuard, commentValidation(), validate, commentPhoto)

module.exports = router