import { useState } from "react"

export default function ListRender(){
    const [list] = useState(['Matheus', 'Pedro', 'Josias'])
    const [users, setUsers] = useState([
        {id: 1, name: 'Matheus', age: 32},
        {id: 2, name: 'João', age: 37},
        {id: 3, name: 'Edcarlos', age: 47}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter(user => randomNumber !== user.id)
        })
    }
    
    return(
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((item) => {
                    <li key={item.id}>{item.name} - {item.age} anos</li>
                })}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}