import styles from './Top.module.css';

export default function Top(props) {

  function changeState() {
    props.animalType === 'dog' ? props.setState('cat') : props.setState('dog');
  }

  return (
    <header className={styles.header_container}>
      <h1>Projeto Props + useState</h1>
      <p>Clique no botão para mudar os componentes abaixo</p>
      <button onClick={changeState}>Mudar Animal</button>
    </header>
  )
}