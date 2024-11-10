'use client';

import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navFlex}>
          <div className={styles.logo}>Portfolio</div>
          <ul className={styles.navLinks}>
            <Link href="/"><li className={styles.navItem}>Home</li></Link>
            <Link href="/about"><li className={styles.navItem}>About</li></Link>
            <Link href="/portfolio"><li className={styles.navItem}>Portfolio</li></Link>
            <Link href="/contact"><li className={styles.navItem}>Contact</li></Link>
          </ul>
          <button className={styles.menuToggle} onClick={toggleNavbar}>
            <FaBars />
          </button>
        </div>
      </div>

      {isClick && (
        <ul className={styles.mobileMenu}>
          <Link href="/"><li className={styles.mobileNavItem}>Home</li></Link>
          <Link href="/about"><li className={styles.mobileNavItem}>About</li></Link>
          <Link href="/portfolio"><li className={styles.mobileNavItem}>Portfolio</li></Link>
          <Link href="/contact"><li className={styles.mobileNavItem}>Contact</li></Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
