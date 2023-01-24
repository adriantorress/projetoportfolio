import styles from './Home.module.css'

import person from '../../img/person.png'
import video from '../../img/video.png'
import college from '../../img/college.png'

import HomeCard from '../home/HomeCard'

export default function Home() {
  return (
    <section>
      <h1>Bem-vindo ao meu <span> Portfólio</span></h1>
      <div className={styles.cards}>
        <HomeCard text="Projetos desenvolvidos por mim" route="/madebyme" icon={person} alt="Projetos desenvolvidos por mim" />
        <HomeCard text="Projetos desenvolvidos em cursos ou videoaulas" route="/madeincourses" icon={video} alt="Projetos desenvolvidos em cursos ou videoaulas" />
        <HomeCard text="Projetos desenvolvidos durante a faculdade" route="/madeincollege" icon={college} alt="Projetos desenvolvidos durante a faculdade" />
      </div>

    </section>
  )
};
