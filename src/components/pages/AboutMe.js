import { useState } from 'react'

import Container from '../layout/Container'

import styles from './AboutMe.module.css'

import TextCard from '../layout/TextCard'
import me from '../../img/me.jpg'

export default function AboutMe() {

  const [skills, setSkills] = useState(true)
  const [academicJourney, setAcademicJourney] = useState(false)
  const [awards, setAwards] = useState(false)
  const [diplomasECertificados, setDiplomasECertificados] = useState(false)


  function setCardSkill() {
    setAcademicJourney(false)
    setDiplomasECertificados(false)
    setAwards(false)
    setSkills(true)
  }
  function setCardAcademicJourney() {
    setSkills(false)
    setDiplomasECertificados(false)
    setAwards(false)
    setAcademicJourney(true)
  }
  function setCardDiplomas() {
    setSkills(false)
    setAcademicJourney(false)
    setAwards(false)
    setDiplomasECertificados(true)
  }
  function setCardAwards() {
    setSkills(false)
    setAcademicJourney(false)
    setDiplomasECertificados(false)
    setAwards(true)
  }

  return (
    <Container>
      <div className={styles.about_me}>
        <div className={styles.nav_info}>
          <div className={styles.info}>
            <img className={styles.profile} src={me} alt="profile image" />
            <p className={styles.p}>Adrian Torres, 21</p>
            <p className={styles.p}>Maceió-AL</p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button onClick={setCardSkill}>Skills</button>
            </li>
            <li className={styles.item}>
              <button onClick={setCardAcademicJourney}>Jornada Acadêmica</button>
            </li>
            <li className={styles.item}>
              <button onClick={setCardDiplomas}>Diplomas e Certificados</button>
            </li>
            <li className={styles.item}>
              <button onClick={setCardAwards}>Prêmios</button>
            </li>
          </ul>
        </div>
        {academicJourney && (
          <>
            <h2>Jornada acadêmica</h2>
            <div className={styles.cards}>
              <TextCard title="Ensino fundamental" text="Cursei todo o ensino fundamental em escola pública aqui na minha cidade. Tive ótimos professores e consegui aproveitar bastante o período." />
              <TextCard title="Técnico em Informática para a Internet" text="Ao fim do 9º ano do ensino fundamental fiz a prova para cursar o ensino técnico em informática para internet (integrado ao ensino médio) no Instituto Federal de Alagoas, apesar de não saber da existência da instituição até 2 meses antes da prova (uma professora inscreveu toda a turma no processo seletivo, eu era bastante leigo quanto as possibilidades públicas de ensino), consegui passar e cursei durante 4 anos. Minha maior dificuldade durante o curso técnico foi quanto ao aprendizado das tecnologias voltadas para web, já nos últimos 2 anos do curso, pois eu não tinha um PC para praticar em casa. Quanto as outras tecnologias haviam bastante prática em sala de aula e consegui fixar facilmente, inclusive minha melhor linguagem continua sendo a que aprendi no curso técnico: Python." />
              <TextCard title="Bacharelado em Sistemas de Informação" text="Ao fim do ensino técnico eu prontamente fiz a prova para cursar o ensino superior em sistemas de informação na mesma instituição, pois não me sentia preparado para o mercado de trabalho após o término do curso técnico, por não ter pegado prática com o desenvolvimento web e por ser leigo quanto a aplicação prática no mercado de trabalho do que eu havia aprendido com outras linguagens. Consegui passar no curso e atualmente estou no 4º período. Agora eu tenho uma máquina muita boa para prática diária na programação. Imergi nas tecnologias que não tinha conseguido fixar bem durante o curso técnico e estou buscando uma oportunidade para entrar no mercado de trabalho." />
            </div>
          </>)}
        {skills && (
          <>
            <h2>Skills</h2>
            <div className={styles.cards}>
              <TextCard title="Soft Skills" text='Sou uma pessoa colaborativa, proativa e tenho rápido aprendizado, consigo me adaptar rapidamente. Quanto a relações interpessoais: me considero simpático e divertido, e no que sei tento ajudar e compartilhar aprendizado. Minha maior dificuldade ou defeito é a introspecção quanto a me arriscar no mercado de trabalho, sei das minhas capacidades, mas ainda assim falta um pouco de confiança para me arriscar, tanto é que não uso muito o Linkedin, fico bastante nervoso em entrevistas e não consigo me expressar. Até por essas dificuldades estou criando esse portfólio para expressar quem eu sou e mostrar os meus projetos.' />
              <TextCard title="Hard Skills" text="Minha melhor linguagem de programação é Python, mas já resolvi pequenas atividades da faculdade com Java e C. Eu tenho uma boa lógica de programação e o que difere nas linguagens é apenas a sintaxe não teria dificuldades em migrar de uma para outra caso fosse necessário. Aprendi HTML, CSS e Javascript pois estou interessado no desenvolvimento web, e estou aprendendo agora ReactJS. Consigo criar rotas de back-end com Flask e Node (nunca documentei uma API), além de conhecer boa parte do processo do desenvolvimento web. Sei SQL, uso com MySQL, mas já utilizei o PostgresSQL também. Tenho projeto básico com banco de dados não relacional: Utilizei a biblioteca mongoose para adicionar registros no MongoDB Atlas. Consigo mexer com Git e Github. Tenho um nível intermediário em inglês, consigo entender e ler facilmente, minha dificuldade é com a fala, pois não tenho prática. Sei um pouco de Hardware também, pois meu estágio do curso técnico foi no setor dos técnicos laboratoristas do bloco de informática da instituição, sei fazer montagem e manutenção de computadores (limpeza, instalação de sistemas,etc)" />
            </div>
          </>)}
        {awards && (
          <>
            <h2>Prêmios</h2>
            <div className={styles.cards}>
              <TextCard title="" text='' />
              <TextCard title="" text="" />
            </div>
          </>)}
        {diplomasECertificados && (
          <>
            <h2>Diplomas e Certificados</h2>
            <div className={styles.cards}>
              <TextCard title="" text='' />
              <TextCard title="" text="" />
            </div>
          </>)}
      </div>
    </Container>
  )
};
