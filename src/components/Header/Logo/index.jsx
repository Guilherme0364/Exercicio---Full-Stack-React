import logo from "../../../assets/logo.svg"
import './style.css'

function Logo() {
    return(
        <>
            <div className="logo">
                <img src={logo} alt="Logo AluraBooks" className="logo-imagem"/>
                <span><strong>Alura</strong> Books</span>
			</div>
        </>
    )
}

export default Logo;