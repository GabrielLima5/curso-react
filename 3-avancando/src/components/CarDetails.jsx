export default function CarDetails({ brand, km, color, newCar }){
    return(
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Quilometragem: {km}</li>
                <li>Cor: {color}</li>
                {newCar ? <p>Esse carro é novo!</p> : <p>Esse carro é usado.</p>}
            </ul>
        </div>
    )
}