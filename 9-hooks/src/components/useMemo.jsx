import { useEffect, useMemo, useState } from "react"

export default function HookUseMemo(){
    const [number, setNumber] = useState(0)

    // const premiumNumbers = ['0', '100', '200']
    const premiumNumbers = useMemo(() => {
        return [100, 200, 300]
    }, [])

    const square = useMemo(() => {
        return number * number
    }, [number])

    useEffect(() => {
        console.log('Premium numbers foi alterado.')
    }, [premiumNumbers])

    return(
        <div>
            <hr />
            <h2>useMemo</h2>
            <div>
                <input type="text" onChange={e => setNumber(e.target.value)} />
                {premiumNumbers.includes(parseInt(number)) ? <p>Acertou o número!</p> : ''}
            </div>
            <div>
                <p>Número: {number}</p>
                <p>Quadrado: {square}</p>
            </div>
            <hr />
        </div>
    )
}