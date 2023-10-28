import styles from './About.module.css'
import { Link } from 'react-router-dom'

export default function About(){
    return(
        <div className={styles.about}>
            <div>
                <h2>Sobre o Mini <span>Blog</span></h2>
                <p>Esse projeto consiste em um blog feito com React no front-end e Firebase no back-end</p>
            </div>
            <div>
                <h3>Crie posts, compartilhe histórias!</h3>
                <Link className="btn" to="/posts/create">Criar post</Link>
            </div>
        </div>
    )
}