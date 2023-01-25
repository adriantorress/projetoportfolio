import styles from './TextCard.module.css'

export default function TextCard({ title, text, text2 }) {
  return (
    <div className={styles.text_card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
};
