import styles from './CircleCard.module.css'

import { Link } from 'react-router-dom'

export default function CircleCard({ text, route, icon, alt }) {
  return (
    <div className={styles.card}>
      <Link to={route}>
        <div className={styles.circle}>
          <img src={icon} alt={alt} />
        </div>
      </Link>
      <p>{text}</p>


    </div >
  )
};
