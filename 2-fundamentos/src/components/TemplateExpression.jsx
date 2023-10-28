export default function TemplateExpression(){
    const name = 'Gabriel'
    const idade = 17

    return(
        <div>
            <h1 className={idade < 18 ? `underage` : ''}>Olá, me chamo {name} e tenho {idade} anos!</h1>
        </div>
    )
}