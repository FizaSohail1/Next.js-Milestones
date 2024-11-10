import React from 'react'
import { FaLinkedin, FaGithub} from "react-icons/fa";
import Link from 'next/link';
import styles from './sidebar.module.css'
import Image from 'next/image'
import MyHome from "/public/gpt-img.webp";


function Sidebar() {
  return (
    <div className={styles.card}>
    <div className={styles.imageCircle}>
    <Image src={MyHome}
          alt="abc"
         height={200}
         width={200}
          objectFit="contain"
         objectPosition="center"/>
    </div>
      <h3 className={styles.nameHeading}>Fiza Sohail</h3>
      <p className={styles.subheading}><strong>Web-Developer</strong></p>
     <div className={styles.socialLinks}>
     <Link href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" className={styles.linkdinLink}><FaLinkedin /></Link>
        <Link href="https://github.com/FizaSohail1" className={styles.githubLink}> <FaGithub /></Link>
     </div>
      <ul className={styles.infoList}>
        <li><strong>Age:</strong> 18</li>
        <li><strong>Availability:</strong> Available</li>
        <li><strong>Address:</strong> Karachi, Pakistan</li>
      </ul>
      <h4 className={styles.skillHeading}>Skills</h4>
      <ul className={styles.skillsList}>
      <li>
        <h4>HTML</h4>
       <div className={styles.bar}>
        <div className={styles.barFill1}></div>
       </div>
      </li>

      <li>
        <h4>CSS</h4>
       <div className={styles.bar}>
        <div className={styles.barFill2}></div>
       </div>
      </li>
      <li>
        <h4>JavaScript/TypeScript</h4>
       <div className={styles.bar}>
        <div className={styles.barFill3}></div>
       </div>
      </li>
      <li>
        <h4>Next.js</h4>
       <div className={styles.bar}>
        <div className={styles.barFill4}></div>
       </div>
      </li>
      <li>
        <h4>Tailwind CSS</h4>
       <div className={styles.bar}>
        <div className={styles.barFill5}></div>
       </div>
      </li>
        </ul>
       <Link href="/about"> <button className={styles.ViewMoreBtn}>View More </button></Link>
    </div>
  )
}

export default Sidebar
