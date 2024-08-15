'use client';
import { useState } from 'react';
import styles from "./page.module.css";
import CardAnimal from './components/CardAnimal';
import CardInfo from './components/CardInfo/CardInfo';
import Top from './components/Top';

export default function Home() {

  const [typeCardComponent, setTypeCardComponent] = useState("dog");

  return (
    <div className={styles.main_container}>
      {/* Top Component */}
      <Top animalType={typeCardComponent} setState={setTypeCardComponent} />

      <main>
        <CardAnimal animalType={typeCardComponent} />
        <CardInfo animalType={typeCardComponent} />
      </main>
    </div>
  );
}
