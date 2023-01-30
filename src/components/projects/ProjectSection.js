import TextCard from '../layout/TextCard';
import styles from './ProjectSection.module.css';

export default function ProjectSection({ src, alt, title, text }) {
  return (
    <section className={styles.section}>
      <img src={src} alt={alt} />
      <TextCard title={title}>{text}</TextCard>
    </section>
  )
};
