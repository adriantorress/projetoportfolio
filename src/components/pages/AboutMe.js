import Container from '../layout/Container'

import styles from './AboutMe.module.css'

import TextCard from '../layout/TextCard'
import me from '../../img/me.jpg'

export default function AboutMe() {
  return (
    <Container>
      <div className={styles.about_me}>
        <img className={styles.profile} src={me} alt="profile image" />
        <p className={styles.p}>Adrian Torres, 21</p>
        <p className={styles.p}>Maceió-AL</p>
        <h2>Jornada acadêmica</h2>
        <div className={styles.cards}>
          <TextCard title="Ensino fundamental" text="Cursei todo o ensino fundamental em escola pública aqui na minha cidade. Tive ótimos professores e consegui aproveitar bastante o período." />
          <TextCard title="Técnico em Informática para a Internet" text="Ao fim do 9º ano do ensino fundamental fiz a prova para cursar o ensino técnico em informática para internet (integrado ao ensino médio) no Instituto Federal de Alagoas, apesar de não saber da existência da instituição até 2 meses antes da prova (uma professora inscreveu toda a turma no processo seletivo, eu era bastante leigo quanto as possibilidades públicas de ensino), consegui passar e cursei durante 4 anos. Minha maior dificuldade durante o curso técnico foi quanto ao aprendizado das tecnologias voltadas para web, já nos últimos 2 anos do curso, pois eu não tinha um PC para praticar em casa. Quanto as outras tecnologias haviam bastante prática em sala de aula e consegui fixar facilmente, inclusive minha melhor linguagem continua sendo a que aprendi no curso técnico: Python." />
          <TextCard title="Bacharelado em Sistemas de Informação" text="Ao fim do ensino técnico eu prontamente fiz a prova para cursar o ensino superior em sistemas de informação na mesma instituição, pois não me sentia preparado para o mercado de trabalho após o término do curso técnico, por não ter pegado prática com o desenvolvimento web e por ser leigo quanto a aplicação prática no mercado de trabalho do que eu havia aprendido com outras linguagens. Consegui passar no curso e atualmente estou no 4º período. Agora eu tenho uma máquina muita boa para prática diária na programação. Imergi nas tecnologias que não tinha conseguido fixar bem durante o curso técnico e estou buscando uma oportunidade para entrar no mercado de trabalho." />
        </div>
      </div>
    </Container>
  )
};
