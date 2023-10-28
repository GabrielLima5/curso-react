import { useEffect, useState, useRef } from "react"

export default function HookUseRef(){
    // useRef com variáveis
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    // useRef para elementos DOM
    const inputRef = useRef()
    const buttonRef = useRef()

    const renderText = () => {
        console.log('useRef!')
        console.log(buttonRef)
    }

    return(
        <div>
            <hr />
            <h2>useRef</h2>
            <div>
                <p>O componente renderizou: {numberRef.current} vezes.</p>
                <p>Counter 1: {counter}</p>
                <button onClick={() => setCounter(counter => counter+1)}>Contador A</button>
                <p>Counter 2: {counterB}</p>
                <button onClick={() => setCounterB(counter => counter+1)}>Contador B</button>
            </div>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={() => inputRef.current.focus()}>Clique aqui para focar no input</button>
            </div>
            <div>
                <input type="text" onChange={() => buttonRef.current.click()} />
                <button onClick={renderText} ref={buttonRef}>Digitar alguma coisa no input me força o clique!</button>
            </div>
            <hr />
        </div>
    )
}