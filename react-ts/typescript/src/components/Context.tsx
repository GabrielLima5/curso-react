import React, { useContext } from 'react'
import App, { AppContext } from '../App'

const Context = () => {
    const details = useContext(AppContext)

    return (
        <>
            {details && (
                <div>
                    <h2>Linguagem: {details.language}</h2>
                    <h2>Framework: {details.framework}</h2>
                    <h3>Projetos: {details.projects}</h3>
                </div>
                
            )}
        </>
    )
}

export default Context