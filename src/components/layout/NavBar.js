import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../img/logo.png'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Container customClass="nav">
        <Link to='/'><img src={logo} alt="Portfolio" className={styles.img} /></Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/aboutme">Quem sou eu?</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
};
