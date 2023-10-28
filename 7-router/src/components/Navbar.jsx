// DOIS LINKS COM REACT ROUTER
import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar(){
    return(
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}
            <NavLink to="/" className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-ativo')}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'esta-ativo' : 'nao-ativo')}>Sobre nós</NavLink>
        </nav>
    )
}