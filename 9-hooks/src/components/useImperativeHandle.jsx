import { SomeComponent } from './SomeComponent'
import { useRef } from 'react'

export default function HookUseImperativeHandle(){
    const inputRef = useRef()
    
    return(
        <div>
            <hr />
            <h2>useImperativeHandle</h2>
            <SomeComponent reF={inputRef} />
            <button onClick={() => inputRef.current.validate()}>Validate</button>
            <hr />
        </div>
    )
}
