import { useSomeContext } from "../components/useContext"

export default function About(){
    const { fruit, setFruit } = useSomeContext()
    
    return(
        <div>
            <h2>About</h2>
            <p>Veio lá da Context API também: {fruit}</p>
            <button onClick={() => setFruit('abacaxi')}>Abacaxi</button>
            <button onClick={() => setFruit('morango')}>Morango</button>
            <button onClick={() => setFruit('maçã')}>Maçã</button>
        </div>
    )
}