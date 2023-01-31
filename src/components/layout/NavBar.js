import { Link } from 'react-router-dom'

import { useContext, useEffect } from 'react'

import { Contexto } from '../context'

import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../img/logo.png'
import menu from '../../img/menu.png'
import NavScreen from './NavScreen'

export default function NavBar() {

  const { screensOn, setScreenStatus, navScreenOn, setNavScreenOn, screenStatus } = useContext(Contexto)

  const toogleNavScreen = () => {
    setNavScreenOn(!navScreenOn)
    setScreenStatus(!screenStatus)
  }

  const toogleScreen = () => {
    setNavScreenOn(false)
    setScreenStatus(false)
  }


  return (
    <>
      {navScreenOn && (<NavScreen handleOnClick={toogleNavScreen} handleOnToogleScreen={toogleScreen} />)}
      {screensOn &&
        (<nav className={styles.navbar}>
          <Container customClass="nav">
            <Link to='/'><img src={logo} alt="Portfolio" className={styles.img} /></Link>

            <img src={menu} alt="menu" className={styles.menu} onClick={toogleNavScreen} />

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
        )}
    </>
  )
};
