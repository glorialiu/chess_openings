"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [index, setIndex] = useState(0);

  const openings = [
    "the english",
    "the sicilian",
    "dutch",
    "queens gambit",
    "halloween",
  ];

  // TODO prevent getting the same opening twice in a row
  function newOpening() {
    setIndex(getRandomInt(openings.length));
  }
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function renderOpening() {
    return openings[index];
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Opening Randomizer</p>
      </div>
      <div className={styles.description}>{renderOpening()}</div>
      <div className={styles.description}>
        <button onClick={newOpening}>New Opening!</button>;
      </div>
    </main>
  );
}
