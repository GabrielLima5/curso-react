// import { useContext } from "react"
// import UserContext from "../context/UserContext"

// 4 - refatorando com hook
import useUserContext from "../hooks/useUserContext"

export default function Home(){
    // const {user, setUser} = useContext(UserContext)
    const { user, setUser } = useUserContext()
    return(
        <div>
            <h1>Home</h1>
            <h2>{user}</h2>
            <input type="text" value={user} onChange={e => setUser(e.target.value)} />
        </div>
    )
}