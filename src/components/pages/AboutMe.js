import Container from '../layout/Container'

import styles from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <Container>
      <div className={styles.about_me}>
        <h1 >Quem sou eu?</h1>
        <p>Meu nome é José Adrian, tenho 21 anos e sou natural de Maceió-AL.</p>
        <h3>Jornada acadêmica</h3>
        <p>Cursei todo o ensino fundamental em escola pública aqui na minha cidade. </p>
        <p>Ao fim do 9º ano do ensino fundamental fiz a prova para cursar o ensino técnico em informática para internet (integrado ao ensino médio) no Instituto Federal de Alagoas, apesar de não saber da existência da instituição até 2 meses antes da prova (uma professora inscreveu toda a turma no processo seletivo, eu era bastante leigo quanto as possibilidades públicas de ensino), consegui passar e cursei durante 4 anos.</p>
        <p>Ao fim do ensino técnico eu prontamente fiz a prova para cursar o ensino superior em sistemas de informação na mesma instituição, pois não me sentia preparado após o término do curso técnico.</p>
        <p>Minha maior dificuldade durante o curso técnico foi quanto ao aprendizado das tecnologias voltadas para web, já nos últimos 2 anos do curso, pois eu não tinha um PC para praticar em casa. Quanto as outras tecnologias haviam bastante prática em sala de aula e consegui fixar facilmente, inclusive minha melhor linguagem continua sendo a que aprendi no curso técnico: Python.</p>
        <p>Consegui passar no curso e atualmente estou no 4º período. Agora eu tenho uma máquina muita boa para prática diária na programação. Imergi nas tecnologias que não tinha conseguido fixar bem durante o curso técnico e estou buscando apenas uma oportunidade para entrar no mercado de trabalho.</p>
      </div>
    </Container>
  )
};
