import logoMarca from './Logo.svg'
import './Logo.css'

const Logo = () => {

    return (
        <div className='container-logo'>
            <img src={logoMarca} alt="logo-marca"></img>
            <span>Medical - group</span>
        </div>

    );

}

export default Logo;