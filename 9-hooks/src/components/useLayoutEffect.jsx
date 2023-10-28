import { useLayoutEffect, useEffect, useState } from "react"

export default function HookUseLayoutEffect(){
    const [name, setName] = useState('Algum nome')

    useEffect(() => {
        console.log('2')
        setName('Mudou de nome.')
    }, [])

    useLayoutEffect(() => {
        console.log('1')
        setName('Outro nome')
    }, [])

    console.log(name)

    return(
        <div>
            <hr />
            <h2>useLayoutEffect</h2>
            <div>
                <p>{name}</p>
            </div>
            <hr />
        </div>
    )
}