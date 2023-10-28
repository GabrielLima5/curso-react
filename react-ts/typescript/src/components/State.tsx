import React from 'react'
import { useState, ChangeEvent } from 'react'

export enum DiaDaSemana{
    SEG = 'Segunda',
    TER = 'Terça',
    QUA = 'Quarta',
    QUI = 'Quinta',
    SEX = 'Sexta',
    SAB = 'Sábado',
    DOM = 'Domingo'
}

type Props = {
    weekDay: DiaDaSemana
}

const State = ({weekDay}: Props) => {
    const [text, setText] = useState<string | null>('Testando hook')
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div>
            <p>O texto é {text}</p>
            <p>O dia da semana é {weekDay}</p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}

export default State