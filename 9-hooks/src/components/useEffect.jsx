import { useEffect, useState } from "react"

export default function HookUseEffect(){
    const [number, setNumber] = useState(0)

    const changeSomething = () => {
        setNumber(number => number+1)
    }
    // useEffect sem array de dependencias
    useEffect(() => {
        console.log('Estou sendo executado.')
    })

    // useEffect com array de dependências vazio
    useEffect(() => {
        console.log('Serei executado apenas uma vez.')
    }, [])

    // item no array de deps
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        console.log('Sou executado quando o anotherNumber muda')
    }, [anotherNumber])

    // cleanup do useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Hello world!')
            // setAnotherNumber(number => number+1)
        }, 2000)

        return () => clearTimeout(timer)
    }, [anotherNumber])

    return(
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber => anotherNumber+10)}>Mudar another number</button>
        </div>
    )
}