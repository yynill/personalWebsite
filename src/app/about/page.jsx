import React from 'react'
import styles from './about.module.css';
import Image from "next/image";

const about = () => {
  return (
    <div>
        <div className={styles.container}>
        <div className={styles.spacing}></div>
            <Image
                src="/banner.png"
                alt="About Image"
                width={800}
                height={325}
                className={styles.img}
                layout="responsive"
            />

        <div className={styles.spacing}></div>
        <h2>stacking skills by obsessively following curiosity</h2>
        i’m a tech enthusiast, passionate about turning innovative ideas into reality.
        i'm currently a university student diving deep into coding and engeneering. and i make <span className={styles.bold}><a href="https://www.youtube.com/channel/UCpbadiWgT2CyCZmpnOSHAFw" className={styles.navLink} target="_blank" rel="noopener noreferrer">videos</a></span> about some of these projects<br />
        <br />
        “The best way to predict your future is to CREATE it.” <br />
        — Abraham Lincoln <br />
    </div>
    </div>
  )
}

export default about