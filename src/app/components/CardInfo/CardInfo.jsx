import styles from './CardInfo.module.css';
import Image from 'next/image';

export default function CardInfo(props) {
  return (
    <div className={styles.card_info}>
      <h3>Informação sobre o {props.animalType}</h3>
      <p>{props.animalInfo}</p>
    </div>
  );
}