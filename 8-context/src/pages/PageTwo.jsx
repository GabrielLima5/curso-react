import { useContext } from "react"
import { TitleColorContext } from "../context/TitleColorContext"

export default function PageTwo(){
    const {saudacao} = useContext(TitleColorContext)
    return(
        <div>
            <h1>Página 2</h1>
            <span>Saudação: {saudacao}</span>
        </div>
    )
}