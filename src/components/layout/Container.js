import styles from './Container.module.css'

import { useContext } from 'react'

import { ContextoNavScreen } from '../context'


export default function Container(props) {
  const { screensOn } = useContext(ContextoNavScreen)
  return (
    <>
      {screensOn && (<div className={`${styles.container} ${styles[props.customClass]}`}>
        {props.children}
      </div>)}
    </>
  )
};
