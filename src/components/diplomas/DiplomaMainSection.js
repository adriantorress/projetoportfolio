import styles from './DiplomaMainSection.module.css'

import DiplomaSection from './DiplomaSection'


export default function DiplomaMainSection({ listaDeSrc, listaDeAlt, listaDeTitle, listaDeText }) {


  return (
    <div className={styles.diplomas}>
      {listaDeSrc.map((src, imgIndex) => {
        return (
          <DiplomaSection id={`${imgIndex}`} key={src} src={listaDeSrc[imgIndex]} alt={listaDeAlt[imgIndex]} title={listaDeTitle[imgIndex]} text={listaDeText[imgIndex]} />
        )
      })}
    </div>
  )
};
