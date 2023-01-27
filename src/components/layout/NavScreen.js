import styles from './NavScreen.module.css'

import fechar_menu from '../../img/fechar_menu.png'

import { Link } from 'react-router-dom'


export default function NavScreen({ handleOnClick, handleOnToogleScreen }) {

  return (
    <div className={styles.nav_screen}>
      <div className={styles.menu}>
        <img src={fechar_menu} alt="fechar_menu" onClick={handleOnClick} />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link onClick={handleOnToogleScreen} to="/">Inicio</Link>
        </li>
        <li className={styles.item}>
          <Link onClick={handleOnToogleScreen} to="/projects">Projetos</Link>
        </li>
        <li className={styles.item}>
          <Link onClick={handleOnToogleScreen} to="/about">Sobre</Link>
        </li>
        <li className={styles.item}>
          <Link onClick={handleOnToogleScreen} to="/aboutme">Quem sou eu?</Link>
        </li>
      </ul>
    </div >
  )
};
