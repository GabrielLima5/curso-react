import React from 'react'

export default function Challenge(){
    const valor1 = 16
    const valor2 = 23

    const handleClick = () => {
        console.log(valor1 + valor2)
    }

    return(
        <div>
            <p>Valor 1: {valor1}</p>
            <p>Valor 2: {valor2}</p>
            <button onClick={handleClick}>Clique aqui para obter a soma dos valores</button>
        </div>
    )
}