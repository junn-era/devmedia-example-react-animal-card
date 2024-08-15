'use client';
import { useState } from 'react';
import dogImage from '../../public/cachorro.jpg';
import catImage from '../../public/gato.jpg';
import Image from "next/image";
import styles from "./page.module.css";
import CardAnimal from './components/CardAnimal';
import CardInfo from './components/CardInfo/CardInfo';

export default function Home() {

  const [typeCardComponent, setTypeCardComponent] = useState("dog");

  const changeState = () => {
    if (typeCardComponent === 'dog') {
      setTypeCardComponent('cat');
    } else {
      setTypeCardComponent('dog');
    }
  };

  return (
    <div className={styles.main_container}>
      {/* Top Component */}
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={changeState}>Mudar Animal</button>
      </header>

      <main>
        <CardAnimal animalType={typeCardComponent} />
        <CardInfo animalType={typeCardComponent} />
      </main>
    </div>
  );
}
