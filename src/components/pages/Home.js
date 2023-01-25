import styles from './Home.module.css'

import CircleCard from '../layout/CircleCard'

import project from '../../img/project.png'
import about from '../../img/about.png'
import me from '../../img/me.png'

export default function Home() {
  return (
    <section className={styles.section}>
      <h1>Bem-vindo ao meu <span> Portfólio</span></h1>
      <div className={styles.cards}>
        <CircleCard text="Projetos" route="/projects" icon={project} alt="Visualizar projetos" />
        <CircleCard text="Sobre" route="/about" icon={about} alt="Sobre o portfólio" />
        <CircleCard text="Quem sou eu?" route="/aboutme" icon={me} alt="Sobre mim" />
      </div>


    </section>
  )
};
