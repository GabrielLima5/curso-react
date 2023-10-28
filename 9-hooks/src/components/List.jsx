import { useState, useEffect } from "react";

export default function List({getItems}){
    const [myItems, setMyItems] = useState([])

    useEffect(() => {
        console.log('Buscando itens do db')
        setMyItems(getItems)
    }, [getItems])

    return(
        <div>
            {myItems && myItems.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}