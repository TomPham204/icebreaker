import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    setTimeout(() => (setShowWelcome(false), setShowChoices(true)), 3000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Online icebreaker</title>
        <meta name="description" content="Online icebreaker" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        {showWelcome && (
          <h1 className={styles.title}>
            Welcome to Online Icebreaker, designed by Tom Pham.
          </h1>
        )}
        {showChoices && (
          <div className={styles.wrapper}>
            <Link href="/ten-questions">
              <a className={styles.button}>10 Questions</a>
            </Link>
            <Link href="/">
              <a className={styles.button}>To be added</a>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
