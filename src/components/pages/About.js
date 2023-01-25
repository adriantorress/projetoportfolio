import Container from '../layout/Container'

import styles from './About.module.css'

export default function About() {
  return (
    <Container>
      <div className={styles.about}>
        <h1 >Sobre o <span>Portfólio</span></h1>
        <h3>Propósito</h3>
        <p>Projeto feito com o objetivo de agrupar da melhor forma possível todos os meus projetos, a fim de que possa tornar a visualização de cada projeto mais fácil e limpa.</p>
        <h3>Dificuldade</h3>
        <p>Acredito que a maior dificuldade para o desenvolvimento desse projeto será quando o novo período da faculdade se iniciar, pois terei menos tempo para trabalhar nele.</p>
        <h3>Recompensa</h3>
        <p>Apesar de qualquer dificuldade continuarei desenvolvendo o projeto, pois acredito que ele possa abrir portas para o mercado de trabalho.</p>
      </div>
    </Container>
  )
};
