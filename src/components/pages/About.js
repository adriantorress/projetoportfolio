import Container from '../layout/Container'
import TextCard from '../layout/TextCard'

import styles from './About.module.css'

export default function About() {
  return (
    <Container>
      <div className={styles.about}>
        <h1 >Sobre o <span>Portfólio</span></h1>
        <TextCard title="Propósito" text="Projeto feito com o objetivo de agrupar da melhor forma possível todos os meus projetos, a fim de que possa tornar a visualização de cada projeto mais fácil e limpa." />
        <TextCard title="Dificuldade" text="Acredito que não terei tantas dificuldades para o desenvolvimento desse projeto. Quando o novo período da faculdade se iniciar terei menos tempo para trabalhar nele, mas nada que atrapalhe tanto o desenvolvimento." />
        <TextCard title="Recompensa" text="Ao desenvolver esse projeto ganharei mais experiência e adquirirei novos conhecimentos. Me aprofundarei cada vez mais nas tecnologias web e além disso acredito que ele possa abrir portas para o mercado de trabalho." />
      </div>
    </Container>
  )
};
