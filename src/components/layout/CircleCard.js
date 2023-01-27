import styles from './CircleCard.module.css'

import { Link } from 'react-router-dom'

import { ExternalLink } from 'react-external-link'


export default function CircleCard({ text, route, icon, alt, external = false }) {
  return (
    <div className={styles.card}>
      {external ? (<ExternalLink href={route}><div className={styles.circle}>
        <img src={icon} alt={alt} />
      </div></ExternalLink>) : (<Link to={route}>
        <div className={styles.circle}>
          <img src={icon} alt={alt} />
        </div>
      </Link>)}
      <p>{text}</p>


    </div >
  )
};
