import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

import styles from './Footer.module.css'

import { useContext } from 'react'

import {ContextoNavScreen} from '../context'

import { ExternalLink } from 'react-external-link'

export default function Footer() {
  const { screensOn } = useContext(ContextoNavScreen)
  return (
    <>
      {screensOn && (<footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <ExternalLink href="https://www.instagram.com/adriantorres.s">
              <FaInstagram />
              <br />
            </ExternalLink>
            <span>Instagram</span>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/adriantorres-s/">
              <FaLinkedin />
              <br />
            </ExternalLink>
            <span>Linkedin</span>
          </li>
          <li>
            <ExternalLink href="https://www.github.com/adriantorress">
              <FaGithub />
              <br />
            </ExternalLink>
            <span>Github</span>
          </li>
        </ul>
      </footer >)}
    </>
  )
};
