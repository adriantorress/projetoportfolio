import { useState, useContext } from 'react'

import { ContextoNavScreen } from '../context'

import Container from '../layout/Container'
import CircleCard from '../layout/CircleCard'
import TextCard from '../layout/TextCard'
import DiplomaMainSection from '../diplomas/DiplomaMainSection'

import styles from './AboutMe.module.css'


import me from '../../img/me.jpg'
import certificate from '../../img/certificate.png'
import certificado_obmep from '../../img/certificado_obmep.jpeg'
import diploma_tecnico from '../../img/diploma_tecnico.jpeg'
import medalhas_frente from '../../img/medalhas_frente.jpeg'
import medalhas_verso from '../../img/medalhas_verso.jpeg'
import reconhecimento_eecav from '../../img/reconhecimento_eecav.jpeg'

export default function AboutMe() {
  const { screensOn } = useContext(ContextoNavScreen)

  const [who, setWho] = useState()

  const listaDeSrc = [diploma_tecnico, certificado_obmep, [medalhas_frente, medalhas_verso], reconhecimento_eecav]
  const listaDeAlt = ["Diploma técnico", "Certificado honra ao mérito obmep", "Medalhas ensino fundamental", "Honra ao Mérito Ensino Fundamental Escola Estadual Capitão Álvaro Victor"]
  const listaDeTitle = ["Diploma do Curso Técnico em Informática para a Internet", "Certificado de Menção Honrosa OBMEP", "Medalhas ensino fundamental", "Reconhecimento da Escola Estadual Capitão Álvaro Victor"]
  const listaDeText = []

  function render() {
    switch (who) {
      case "who":
        return (<h1>Quem sou eu?</h1>)
      case "academicJourney":
        return (
          <>
            <h2>Jornada acadêmica</h2>
            <div className={styles.cards}>
              <TextCard title="Ensino fundamental">Cursei todo o ensino fundamental em escola pública aqui na minha cidade. Tive ótimos professores e consegui aproveitar bastante o período.</TextCard>
              <TextCard title="Técnico em Informática para a Internet">Ao fim do 9º ano do ensino fundamental fiz a prova para cursar o ensino técnico em informática para internet (integrado ao ensino médio) no Instituto Federal de Alagoas, apesar de não saber da existência da instituição até 2 meses antes da prova (uma professora inscreveu toda a turma no processo seletivo, eu era bastante leigo quanto as possibilidades públicas de ensino), consegui passar e cursei durante 4 anos. <br /> Minha maior dificuldade durante o curso técnico foi quanto ao aprendizado das tecnologias voltadas para web, já nos últimos 2 anos do curso, pois eu não tinha um PC para praticar em casa. Quanto as outras tecnologias haviam bastante prática em sala de aula e consegui fixar facilmente, inclusive minha melhor linguagem continua sendo a que aprendi no curso técnico: Python.</TextCard>
              <TextCard title="Bacharelado em Sistemas de Informação">Ao fim do ensino técnico eu fiz a prova para cursar o ensino superior em sistemas de informação na mesma instituição, pois não me sentia preparado para o mercado de trabalho após o término do curso técnico, por não ter pegado prática com o desenvolvimento web e por ser um pouco leigo quanto a aplicação prática no mercado de trabalho do que eu havia aprendido com outras linguagens. Consegui passar no curso e atualmente estou no 4º período. <br />Agora eu tenho uma máquina muita boa para prática diária na programação. Imergi nas tecnologias que não tinha conseguido fixar bem durante o curso técnico e estou buscando uma oportunidade para entrar no mercado de trabalho.</TextCard>
            </div>
          </>)
      case "skills":
        return (<>
          <h2 >Skills</h2>
          <div className={styles.cards}>
            <TextCard title="Soft Skills">Sou uma pessoa colaborativa, proativa e tenho rápido aprendizado, consigo me adaptar rapidamente. <br /> Quanto a relações interpessoais: me considero simpático e divertido, e no que sei tento ajudar e compartilhar aprendizado.
              <br />Minha maior dificuldade ou defeito é a introspecção quanto a me arriscar no mercado de trabalho. Sei das minhas capacidades, mas ainda assim falta um pouco de confiança para me arriscar, tanto é que não uso muito o Linkedin, o que me atrapalha muito a conseguir oportunidades, pois lá é a porta mais acessível para o mercado de trabalho. Fico um pouco nervoso em entrevistas e não consigo me expressar o tanto quanto eu gostaria. Até por essas dificuldades estou criando esse portfólio para expressar quem eu sou e mostrar os meus projetos. <br /> O que você pode esperar do Adrian: entrega, dedicação, uma pessoa leve que vai chegar pra somar e que tem aprendizado constante.</TextCard>
            <TextCard title="Hard Skills">Minha melhor linguagem de programação é Python, mas já resolvi pequenas atividades da faculdade com Java e C. Eu tenho uma boa lógica de programação e o que difere nas linguagens é apenas a sintaxe não teria dificuldades em migrar de uma para outra caso fosse necessário. Aprendi HTML, CSS e Javascript pois estou interessado no desenvolvimento web, e estou aprendendo agora ReactJS. Consigo criar rotas de back-end com Flask e Node (nunca documentei uma API), além de conhecer boa parte do processo do desenvolvimento web. Sei SQL, uso com MySQL, mas já utilizei o PostgresSQL também. Tenho projeto básico com banco de dados não relacional: Utilizei a biblioteca mongoose para adicionar registros no MongoDB Atlas. Consigo mexer com Git e Github. Tenho um nível intermediário em inglês, consigo entender e ler facilmente, minha dificuldade é com a fala, pois não tenho prática. Sei um pouco de Hardware também, pois meu estágio do curso técnico foi no setor dos técnicos laboratoristas do bloco de informática da instituição, sei fazer montagem e manutenção de computadores (limpeza, instalação de sistemas,etc). </TextCard>
          </div>
        </>)
      case "diplomas":
        return (
          <>
            <h2>Diplomas, Certificados e Medalhas</h2>
            <CircleCard text="Alguns que já estão no Linkedin" icon={certificate} external={true} route="https://www.linkedin.com/in/adriantorres-s/details/certifications/" />
            <DiplomaMainSection listaDeSrc={listaDeSrc} listaDeAlt={listaDeAlt} listaDeTitle={listaDeTitle} listaDeText={listaDeText} />
          </>)
      case "experiences":
        return (
          <>
            <h2>Experiências profissionais</h2>
            <div className={styles.cards}>
              <TextCard title="Estágio no Instituto Federal de Alagoas">O estágio para formação no curso técnico em Informática para a Internet, integrado ao ensino médio no IFAL, foi realizado na própria instituição. <br />Estagiei na área de suporte aos laboratórios na CINFO (Coordenação de Informática) do bloco de informática do instituto. Lá realizei manutenção preventiva, fiz instalação de hardware e software e também instalação em massa de sistemas operacionais, além do suporte aos laboratórios e auditório do bloco.<br />Lá foi minha primeira experiência de ambiente de trabalho, era um ambiente agradável com pessoas legais e o trabalho bem fluído. Gostei bastante da experiência.</TextCard>
              <TextCard title="Estágio na Illa Sorvetes">Ao fim do curso técnico e não me sentindo preparado para o mercado de trabalho, resolvi buscar emprego visando montar um computador para praticar o que havia aprendido durante o curso. Entrei como estagiário na Illa Sorvetes como frente de loja, fiquei 4 meses e adquiri experiência com atendimento ao cliente e outras atividades que realizei durante o período. Após esses 4 meses fui para o setor de estoque da empresa e fiquei mais 8 meses. <br />Ao fim de 1 ano no estágio e já com o meu computador finalizado, eu resolvi me dedicar aos estudos e prática na programação e sai do estágio. Foi uma ótima experiência para mim, fiz novos amigos e me aprimorei como pessoa.</TextCard>
            </div>
          </>)
      default:
        setWho("who")
    }
  }

  return (
    <Container>
      <div className={styles.about_me}>

        <div className={styles.nav_info}>
          <div className={styles.info}>
            <a onClick={() => { setWho("who") }}><img className={`${styles.profile} ${!screensOn && styles.profile_hidden}`} src={me} alt="profile image" /></a>
            <p className={styles.p}>Adrian Torres, 21</p>
            <p className={styles.p}>Maceió-AL</p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a onClick={() => { setWho("skills") }}>Skills</a>
            </li>
            <li className={styles.item}>
              <a onClick={() => { setWho("academicJourney") }}>Jornada acadêmica</a>
            </li>
            <li className={styles.item}>
              <a onClick={() => { setWho("diplomas") }} >Certificados</a>
            </li>
            <li className={styles.item}>
              <a onClick={() => { setWho("experiences") }} >Experiências profissionais</a>
            </li>
          </ul>
        </div>

        {render()}

      </div>
    </Container>
  )
};
