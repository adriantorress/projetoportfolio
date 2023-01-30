import TextCard from '../layout/TextCard';

import styles from './DiplomaSection.module.css';

export default function DiplomaSection({ src, alt, title, text }) {

  function verificaSrc() {
    if (typeof (src) === 'object') {
      return (
        <section className={styles.section}>
          <div className={styles.doubleImg}>
            <img src={src[0]} alt={alt} />
            <img src={src[1]} alt={alt} />
          </div>
          <TextCard title={title}>{text}</TextCard>
        </section>

      )
    }
    else {
      return (
        <section className={styles.section}>
          <img src={src} alt={alt} />
          <TextCard title={title}>{text}</TextCard>
        </section>
      )
    }
  }
  return (
    <>
      {verificaSrc()}
    </>
  )
};
