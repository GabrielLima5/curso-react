export default function CarDetails({id, brand, model, year}){
    return(
        <>
           <tbody>
                <tr>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{year}</td>
                </tr>
           </tbody>
        </>
    )
}