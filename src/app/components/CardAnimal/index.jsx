import styles from './CardAnimal.module.css';
import Image from 'next/image';
import dogImage from '../../../../public/cachorro.jpg';
import catImage from '../../../../public/gato.jpg';

export default function CardAnimal(props) {
  return (
    <div className={styles.card_animal}>
      <Image src={props.animalType === 'dog' ? dogImage : catImage} alt='animal' />
    </div>
  );
}