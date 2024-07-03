import './style.css'
import profile from '../../../assets/perfil.svg'
import bag from '../../../assets/sacola.svg'

const icons = [profile, bag]

function Icons () {
    return (
        <ul className="icons">
            {icons.map ( (icon) => { // Sintaxe de retorno explícito
            return <li className="icons"><img className="icon" src={icon} alt="Icon"/></li>
        })}
  </ul>
    )
}

export default Icons