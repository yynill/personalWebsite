import React from 'react';
import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
      </div>
      <div className={styles.copyRight}>
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;
