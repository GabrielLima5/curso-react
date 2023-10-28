import { useState } from "react"

export default function ConditionalRender(){
    const [x] = useState(true)
    
    return(
        <div>
            <h1>Isso será exibido?</h1>
            {x && <h2>Sim! (if simples)</h2>}
            {x === true ? (<h2>Sim! (if ternário)</h2>) : (<h2>Não.</h2>)}
        </div>
    )
}