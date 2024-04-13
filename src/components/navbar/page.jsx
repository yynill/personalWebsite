"use client"

import React, { useState } from 'react';
import styles from './nav.module.css';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
      <nav className={styles.navbar}>
          <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
          </div>
          <div className={styles.nav_left}>
              <Link href="/" className={styles.navLink}>/</Link>
              <Link href="/about" className={styles.navLink}>about</Link>
              <Link href="/words" className={styles.navLink}>words</Link>
              <Link href="/unknown" className={styles.navLink}>???</Link>
          </div>
          <div className={`${styles.mobileLinks} ${isOpen ? styles.open : ''}`}>
              <Link href="/" className={styles.mobilenavLink}>/</Link>
              <Link href="/about" className={styles.mobilenavLink}>about</Link>
              <Link href="/words" className={styles.mobilenavLink}>words</Link>
              <Link href="/unknown" className={styles.mobilenavLink}>???</Link>
          </div>
          <div className={styles.nav_right}>
              <a href="https://twitter.com/yynill" className={styles.navLink} target="_blank" rel="noopener noreferrer">bird</a>
              <a href="https://github.com/yynill" className={styles.navLink} target="_blank" rel="noopener noreferrer">code</a>
              <a href="https://www.youtube.com/channel/UCpbadiWgT2CyCZmpnOSHAFw" className={styles.navLink} target="_blank" rel="noopener noreferrer">videos</a>
              <a href="mailto:example@example.com" className={styles.navLink}>envelope</a>
          </div>
      </nav>
  );
};

export default Navbar;



