import { useState } from "react"

export default function ManageData(){
    const [number, setNumber] = useState(15)
    
    return(
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber((number) => number+1)}>Mudar state</button>
        </div>
    )
}