import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <NavLink to="/1">1</NavLink>
            <NavLink to="/2">2</NavLink>
            <NavLink to="/3">3</NavLink>
            <NavLink to="/changeuser">Mudar contador de user</NavLink>
        </nav>
    )
}