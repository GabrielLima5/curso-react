import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useAuthValue } from '../context/AuthContext'
import { useAuthentication } from '../hooks/useAuthentication'

export default function Navbar(){
    const { user } = useAuthValue()
    const { logout } = useAuthentication()
    
    return(
        <nav className={styles.navbar}>
            <NavLink className={styles.brand} to="/">Mini <span>Blog</span></NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
                </li>

                {!user && (
                    <>
                        <li>
                            <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}>Criar conta</NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>
                            <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : '')}>Novo Post</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : '')}>Dashboard</NavLink>
                        </li>
                    </>
                )}
                
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
                </li>

                {user && (
                    <li>
                        <button onClick={logout} style={{color: 'red'}}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}