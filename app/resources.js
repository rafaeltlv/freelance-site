import Image from 'next/image'
import styles from './page.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2 className='FirmTitle'>
          AdrielSharaby
        </h2>
        <div>
        </div>
      </div>

      <div className={styles.center}>
      </div>
        <h1 className='PageIntro' text->
        </h1>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Us <span>-&gt;</span>
          </h2>
          <p>Learn More About Us</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Services <span>-&gt;</span>
          </h2>
          <p>See What Options We Can Offer You</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Testimonies <span>-&gt;</span>
          </h2>
          <p>See What Our Previous Clients Have Said</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            More Resources <span>-&gt;</span>
          </h2>
          <p>Resources For Your Successful Business
          </p>
        </a>
      </div>
    </main>
  )
}
