'use client';
import { useState } from 'react';
import dogImage from '../../public/cachorro.jpg';
import catImage from '../../public/gato.jpg';
import Image from "next/image";
import styles from "./page.module.css";
import CardAnimal from './components/CardAnimal';
import CardInfo from './components/CardInfo/CardInfo';

export default function Home() {

  let animalImage = "";
  let animalInfo = "";
  let animalType = "Dog";

  const [typeCardComponent, setTypeCardComponent] = useState("dog");

  const changeState = () => {
    if (typeCardComponent === 'dog') {
      setTypeCardComponent('cat');
    } else {
      setTypeCardComponent('dog');
    }
  };

  if (typeCardComponent === 'dog') {
    animalImage = dogImage;
    animalInfo = 'É um mamífero carnívoro da familia dos canídeos.';
    animalType = 'Cachorro';
  } else {
    animalImage = catImage;
    animalInfo = 'É um mamífero carnívoro da familia dos felídeos';
    animalType = 'Gato';
  }

  return (
    <div className={styles.main_container}>
      {/* Top Component */}
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={changeState}>Mudar Animal</button>
      </header>

      <main>
        <CardAnimal animalImage={animalImage} />
        <CardInfo animalType={animalType} animalInfo={animalInfo} />
      </main>
    </div>
  );
}
