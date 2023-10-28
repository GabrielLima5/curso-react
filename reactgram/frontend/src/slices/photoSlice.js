import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from '../services/photoService'

const initialState = {
    photos: [],
    photo: {},
    error: false,
    success: false,
    loading: false,
    message: null
}

export const publishPhoto = createAsyncThunk('photo/publish',
    async (photo, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.publishPhoto(photo, token)
        
        if (data.errors) thunkAPI.rejectWithValue(data.errors[0])
        return data
    }
)

export const getUserPhotos = createAsyncThunk('photo/user',
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.getUserPhotos(id, token)
        return data
    }
)

export const editPhoto = createAsyncThunk('photo/update',
    async (photoData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.editPhoto({ title: photoData.title }, photoData.id, token)
        
        if (data.errors) thunkAPI.rejectWithValue(data.errors[0])
        return data
    }
)

export const getPhotoById = createAsyncThunk('photo/get',
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().token.auth.user
        const data = await photoService.getPhotoById(id, token)
        return data
    }
)

export const deletePhoto = createAsyncThunk('photo/delete',
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.deletePhoto(id, token)
        
        if (data.errors) thunkAPI.rejectWithValue(data.errors[0])

        return data
    }
)

export const likePhoto = createAsyncThunk('photo/like', 
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.likePhoto(id, token)

        if (data.errors) thunkAPI.rejectWithValue(data.errors[0])
        return data
    }
)

export const commentPhoto = createAsyncThunk('photo/comment',
    async (commentData, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.commentPhoto({comment: commentData.comment}, commentData.id, token)
        
        if (data.errors) thunkAPI.rejectWithValue(data.errors[0])
        return data
    }
)

export const getAllPhotos = createAsyncThunk('photo/getAll',
    async (_, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.getAllPhotos(token)
        return data
    }
)

export const searchPhotos = createAsyncThunk('photo/search',
    async (query, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token
        const data = await photoService.searchPhotos(query, token)
        return data
    }
)

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(publishPhoto.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(publishPhoto.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.success = true
            state.photo = action.payload
            state.photos.unshift(state.photo)
            state.message = 'Foto publicada com sucesso.'
        }).addCase(publishPhoto.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.photo = {}
        }).addCase(getUserPhotos.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(getUserPhotos.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.photos = action.payload
        }).addCase(deletePhoto.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(deletePhoto.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.success = true
            state.message = action.payload.message
            state.photos = state.photos.filter(photo => {
                return photo._id !== action.payload.id
            })
        }).addCase(deletePhoto.rejected, (state, action) => {
            state.loading = false
            state.success = false
            state.error = action.payload
            state.photo = {}
        }).addCase(editPhoto.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(editPhoto.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.photos.map(photo => {
                if (photo._id === action.payload.photo._id){
                    return (photo.title = action.payload.photo.title)
                }
                return photo
            })
        }).addCase(editPhoto.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.photo = {}
        }).addCase(getPhotoById.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(getPhotoById.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.photo = action.payload
        }).addCase(likePhoto.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.success = true

            if (state.photo.likes) {
                state.photo.likes.push(action.payload.userId)
            }

            state.photos.map(photo => {
                if (photo._id === action.payload.photoId){
                    return photo.likes.push(action.payload.userId)
                }
                return photo
            })

            state.message = action.payload.message
        }).addCase(likePhoto.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        }).addCase(commentPhoto.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(commentPhoto.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.photo.comments.push(action.payload.comment)
        }).addCase(commentPhoto.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.photo = {}
        }).addCase(getAllPhotos.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(getAllPhotos.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.photos = action.payload
        }).addCase(searchPhotos.pending, (state) => {
            state.loading = true
            state.error = false
        }).addCase(searchPhotos.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.success = true
            state.photos = action.payload
        })
    }
})

export const { resetMessage } = photoSlice.actions
export default photoSlice.reducer