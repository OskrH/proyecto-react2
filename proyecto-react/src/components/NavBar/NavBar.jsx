import CartWidget from "../CartWidget/CartWidget"
import icon from "./assets/icon.svg"
import { NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
        <Link to='/'>
            <img src={icon} alt="iconoprincipal" />
        </Link>
            <div className="Categories">
                <NavLink to={`/categoria/RAM`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>RAM</NavLink>
                <NavLink to={`/categoria/TARJETA DE VIDEO`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>TARJETA DE VIDEO</NavLink>
                <NavLink to={`/categoria/PROCESADORES`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>PROCESADORES</NavLink>
                <NavLink to={`/categoria/ALMACENAMIENTO`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>ALMACENAMIENTO</NavLink>
                <NavLink to={`/categoria/PLACA MADRE`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>PLACA MADRE</NavLink>
            </div>
            <CartWidget></CartWidget>
        </nav>
    )
}

export default NavBar