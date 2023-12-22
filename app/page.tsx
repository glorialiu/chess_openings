"use client";

import { useState } from "react";
import openingsJson from "../eco.json";
import styles from "./page.module.css";

interface opening {
  name: string;
  moves: string;
}

export default function Home() {
  const [index, setIndex] = useState(0);

  function newOpening() {
    setIndex(getRandomInt(openingsJson.length));
  }
  function getRandomInt(max: number) {
    var newRandom = Math.floor(Math.random() * max);
    while (newRandom == index) {
      newRandom = Math.floor(Math.random() * max);
    }
    return newRandom;
  }

  function renderOpeningName() {
    return openingsJson[index].name;
  }

  function renderOpeningMoves() {
    return openingsJson[index].moves;
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <p>Opening Randomizer</p>
      </div>
      <div className={styles.description}>
        {renderOpeningMoves()}
        <br />
        <br />
        {renderOpeningName()}
      </div>
      <div>
        <button className={styles.newOpeningButton} onClick={newOpening}>
          New Opening!
        </button>
        ;
      </div>
    </main>
  );
}
