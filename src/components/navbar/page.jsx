"use client"

import React, { useState } from 'react';
import styles from './nav.module.css';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
        <nav className={styles.navbar}>
            <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

            <div className={styles.nav_left}>
            <Link href="/" className={styles.navLink}>/</Link>
            <Link href="/about" className={styles.navLink}>about</Link>
            <Link href="/videos" className={styles.navLink}>videos</Link>
            <Link href="/words" className={styles.navLink}>words</Link>
            <Link href="/unknown" className={styles.navLink}>???</Link>
            </div>
            <div className={styles.nav_right}>
            <Link href="/unknown" className={styles.navLink}>bird</Link>
            <Link href="/unknown" className={styles.navLink}>code</Link>
            <Link href="/unknown" className={styles.navLink}>envelope</Link>
            </div>
        </nav>
  )
}

export default Navbar