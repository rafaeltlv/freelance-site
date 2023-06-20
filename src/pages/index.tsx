'use client'
import { FC } from 'react';
import Link from 'next/link';
import React from 'react'; // Add this import statement
import styles from '../styles/globals.module.css'
import Layout from '../components/Layout';

const Home: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.description}>
          <h2 className={styles.companyname}>AdrielSharaby</h2>
          <div></div>
        </div>

        <div className={styles.center}>
          <h1 className={styles.intromessage}>Welcome to Our Company</h1>
        </div>
        <div className={styles.grid}>
          <Link href="/about" className="active">
            <div className={styles.card}>
              <h2>
                About Us <span>-&gt;</span>
              </h2>
              <p>Find Out More Of What We&apos;re About</p>
            </div>
          </Link>

          <Link href="/services">
            <div className={styles.card}>
              <h2>
                Services <span>-&gt;</span>
              </h2>
              <p>See What Options We Can Offer You</p>
            </div>
          </Link>

          <Link href="/testimonies">
            <div className={styles.card}>
              <h2>
                Testimonies <span>-&gt;</span>
              </h2>
              <p>What Our Previous Clients Say</p>
            </div>
          </Link>

          <Link href="/resources">
            <div className={styles.card}>
              <h2>
                More Resources <span>-&gt;</span>
              </h2>
              <p>Resources For Your Business</p>
            </div>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
