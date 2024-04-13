import React from 'react'
import styles from './unknown.module.css';

const unknown = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.spacing}></div>

        <div className={styles.heading}>
            into the <span className={styles.bold}>/unknown</span>.
            questions i can't find answers to.
            a collection of some of the most puzzling and intriguing questions that keep me up at night. <br />
            if you know some of the answers, <span className={styles.bold}><a href="mailto:example@example.com">let me know</a></span> immediately.
        </div>
        <div className={styles.spacing}></div>
        <div className={styles.questions}>
            <h3>small</h3>
            what is déjà vu? <br />
            what colour is infrared and ultraviolet? <br />
            what are other books like dune? <br />

            <h3>medium</h3>

            what will be the next big breakthrough in technology? <br />
            is there something even smaller than quarks and leptons? <br />
            what is it like to be some other animal? <br />
            what would a timelaps of evolution look like? <br />

            <h3>large</h3>

            where are the aliens? <br />
            what happens if the univers stops expanding? <br />
            what is it like to be dead? <br />
            are the laws of physics the same everywhere? <br />

        </div>
        </div>
    </div>
  )
}

export default unknown