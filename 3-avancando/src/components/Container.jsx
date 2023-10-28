export default function Container(props){
    return(
        <div>
            {props.children}
            <h2>Meu valor é: {props.myValue}</h2>
        </div>
    )
}