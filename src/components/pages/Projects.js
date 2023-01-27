import styles from './Projects.module.css';

import person from '../../img/person.png'
import video from '../../img/video.png'
import college from '../../img/college.png'

import CircleCard from '../layout/CircleCard'


export default function Projects() {
  return (
    <section className={styles.section}>
      <h1>Projetos</h1>
      <div className={styles.cards}>
        <CircleCard text="Projetos desenvolvidos por mim" route="/madebyme" icon={person} alt="Projetos desenvolvidos por mim" />
        <CircleCard text="Projetos desenvolvidos em cursos ou videoaulas" route="/madeincourses" icon={video} alt="Projetos desenvolvidos em cursos ou videoaulas" />
        <CircleCard text="Projetos desenvolvidos durante a faculdade" route="/madeincollege" icon={college} alt="Projetos desenvolvidos durante a faculdade" />
      </div>
    </section>
  )
};
