import { api, requestConfig } from '../utils/config'

const register = async (data) => {
    const config = requestConfig('POST', data)

    try {
        const res = await fetch(api + '/users/register', config)
            .then(res => res.json())
            .catch(e => console.log(e))
        
        if (res) {
            localStorage.setItem('user', JSON.stringify(res))
        }

        return res
    } catch(e){
        console.log(e)
    }
}

const logout = () => {
    localStorage.removeItem('user')
}

const login = async (data) => {
    const config = requestConfig('POST', data)

    try{
        const res = await fetch(api + '/users/login', config)
            .then(res => res.json())
            .catch(err => console.error(err))

        if (res){
            localStorage.setItem('user', JSON.stringify(res))
        }

        return res
    } catch(e){
        console.error(e)
    }
}

const authService = {
    register,
    logout,
    login
}

export default authService