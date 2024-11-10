import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub} from "react-icons/fa";
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>&copy; Fiza Sohail | All rights reserved.</p>
      <div className={styles.Links}>
       <Link href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" className={styles.Link1}><FaLinkedin /></Link>
       <Link href="https://github.com/FizaSohail1" className={styles.Link1}> <FaGithub /> </Link>
      </div>
    </footer>
  )
}

export default Footer
