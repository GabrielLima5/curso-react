import { api, requestConfig } from '../utils/config'

const profile = async (data, token) => {
    const config = requestConfig('GET', data, token)

    try {
        const res = await fetch(api + '/users/profile', config)
            .then(res => res.json())
            .catch(err => console.error(err))

        return res
    } catch (e) {
        console.error(e)
    }
}

const updateProfile = async (data, token) => {
    const config = requestConfig('PUT', data, token, true)

    try {
        const res = await fetch(api + '/users/', config)
            .then(res => res.json())
            .catch(err => console.error(err))

        return res
    } catch (e) {
        console.error(e)
    }
}

const getUserDetails = async (id) => {
    const config = requestConfig('GET', null)

    try{
        const res = await fetch(`${api}/users/${id}`, config)
            .then(res => res.json())
            .catch(err => console.error(err))
        
        return res
    } catch(e){
        console.error(e)
    }
}

const userService = {
    profile,
    updateProfile,
    getUserDetails
}

export default userService