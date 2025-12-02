"use client";

import { useState } from "react";
import { GameButtons } from "./components/ButtonBox";
import styles from "./page.module.css";

export default function Home() {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  const handleChoice = (choice: string) => {
    setSelectedChoice(choice);
    console.log(choice);
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Hej</h1>
          <GameButtons onChoice={handleChoice} />
        </div>
      </main>
    </div>
  );
}
