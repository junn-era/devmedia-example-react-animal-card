import styles from './CardInfo.module.css';
import Image from 'next/image';

export default function CardInfo(props) {

  let nameAnimalDog = 'Cachorro';
  let nameAnimalCat = 'Gato';
  let infoDog = 'É um mamífero da família dos canídeos.';
  let infoCat = 'É um mamífero da família dos felídeos.';

  return (
    <div className={styles.card_info}>
      <h3>Informação sobre o {props.animalType === 'dog' ? nameAnimalDog : nameAnimalCat}</h3>
      <p>{props.animalInfo === 'dog' ? infoDog : infoCat}</p>
    </div>
  );
}