import styles from './ProjectSection.module.css';

export default function ProjectSection({src, alt, texto }) {
  return (
    <section className={styles.section}>
        <img src={src} alt={alt} />
        {texto}
    </section>
  )
};
