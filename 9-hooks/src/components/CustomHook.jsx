import { useState } from "react"

import { usePrevious } from "./usePrevious"

export default function HookCustom(){
    const [number, setNumber] = useState(0)
    const previousValue = usePrevious(number)
    return(
        <div>
            <hr />
            <h2>Custom Hook</h2>
            <div>
                <p>Atual: {number}</p>
                <p>Anterior: {previousValue}</p>
                <button onClick={() => setNumber(Math.random())}>Alterar</button>
            </div>
            <hr />
        </div>
    )
}