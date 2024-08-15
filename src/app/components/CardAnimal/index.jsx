import styles from './CardAnimal.module.css';
import Image from 'next/image';

export default function CardAnimal(props) {
  return (
    <div className={styles.card_animal}>
      <Image src={props.animalImage} alt='animal' />
    </div>
  );
}