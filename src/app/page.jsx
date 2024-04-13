import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (
    <div>
    <div className={styles.container}>
     <h1 className={styles.title}>yvesnill</h1>
     <hr className={styles.home_hr}/>
     <h2 className={styles.title2}>hackers & painters</h2>


     {/* <Image
      src="/stickman.png"
      alt="About Image"
      width={68}
      height={90}
      className={styles.stickman}
      /> */}
    </div>
    </div>
  )
}

export default Home