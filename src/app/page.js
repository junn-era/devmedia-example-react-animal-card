'use client';
import { useState } from 'react';
import dogImage from '../../public/cachorro.jpg';
import catImage from '../../public/gato.jpg';
import Image from "next/image";
import styles from "./page.module.css";

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

      {/* CardAnimal Component */}
      <main>

        <div className={styles.card_animal}>
          <Image src={animalImage} alt='animal' />
        </div>

        {/* CardInfo Component */}
        <div className={styles.card_info}>
          <h3>Informação sobre o {animalType}</h3>
          <p>{animalInfo}</p>
        </div>


      </main>


    </div>
  );
}
