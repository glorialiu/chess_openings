"use client";

import { useState } from "react";
import openingsJson from "../eco.json";
import styles from "./page.module.css";

interface opening {
  name: string;
  moves: string;
}

const INITIAL_INDEX = -1;

export default function Home() {
  const [index, setIndex] = useState(INITIAL_INDEX);

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
    if (index == INITIAL_INDEX) {
      return "";
    }
    return openingsJson[index].name;
  }

  function renderOpeningMoves() {
    if (index == INITIAL_INDEX) {
      return "";
    }
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
