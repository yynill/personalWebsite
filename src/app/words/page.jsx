import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        
        <div className={styles.grid}>
          <Link href="/projects">
              <h2>Projects &rarr;</h2>
              <p>Discover my programming projects and video editing portfolio.</p>
          </Link>
          
          <Link href="/youtube">
              <h2>YouTube &rarr;</h2>
              <p>Watch tutorials and creative content combining tech and art.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
