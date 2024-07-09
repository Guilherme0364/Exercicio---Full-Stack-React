import './style.css'

const optionsArray = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function Options () {
    return (
        <ul className="options">
            {optionsArray.map( (option) => ( // Sintáxe de retorno implícito
                <li className="option"><p>{option}</p></li>
        ))}
        </ul>
    )
}

export default Options