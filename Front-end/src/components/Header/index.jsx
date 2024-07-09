import Icons from './Icons/index.jsx'
import Logo from './Logo/index.jsx'
import Options from './Options/index.jsx'
import './style.css'

function Header (){
    return(
        <div className="App-header">
            <Logo/>
            <Options/> 
            <Icons/>
        </div>
    )
}

export default Header