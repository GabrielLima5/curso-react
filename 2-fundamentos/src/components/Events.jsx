export default function Events(){
    const handleClick = () => {
        console.log('Você clicou no botão!')
    }

    const renderSomething = (boolean) => {
        if (boolean){
            return <h1>Renderizando true</h1>
        } else {
            return <h1>Renderizando false</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('Botão clicado.')}>Clica aqui, vai!</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}