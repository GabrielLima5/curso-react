import { useContext } from 'react'
import UserContext from './UserContext'

export default function ChangeUser(){
    const {user, setUser} = useContext(UserContext)

    const addUser = () => {
        setUser(user => parseInt(user)+1)
    }
    
    return(
        <div>
            <button onClick={addUser}>++</button>
            <span>Total users: {user}</span>
        </div>
    )
}