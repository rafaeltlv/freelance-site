'use client'
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
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
        <h1 className='PageIntro'>Welcome to Our Company</h1>
      </div>

      <div className={styles.grid}>
        <Link
          href="/about.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About Us <span>-&gt;</span>
          </h2>
          <p>Find Out More Of What We&#39;ve About</p>
        </Link>

        <a
          href="app/services.js"
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
          href="app/testimonies.js"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Testimonies <span>-&gt;</span>
          </h2>
          <p>See What Are Previous Clients Have Said</p>
        </a>

        <a
          href="app/resources"
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
