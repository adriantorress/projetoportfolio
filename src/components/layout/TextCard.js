import styles from './TextCard.module.css'

export default function TextCard({ title, children }) {
  return (
    <div className={styles.text_card}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
};
