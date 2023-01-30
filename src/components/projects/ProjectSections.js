import ProjectSection from './ProjectSection'

import styles from './ProjectSections.module.css'


export default function ProjectSections({ listaDeSrc, listaDeAlt, listaDeTitle, listaDeText }) {


  return (
    <div className={styles.projects}>
      {listaDeSrc.map((src, imgIndex) => {
        return (
          <ProjectSection id={`${imgIndex}`} key={src} src={listaDeSrc[imgIndex]} alt={listaDeAlt[imgIndex]} title={listaDeTitle[imgIndex]} text={listaDeText[imgIndex]} />
        )
      })}
    </div>
  )
};
