import Button from "../Button"
import styles from "./styles.module.css"

export default function Card({title, poster, text}) {
  return (
    <div className={styles.container}>
          <img className={styles.poster} src={poster} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{text}</p>
        <Button text="Comprar Agora" />
        <Button text="Reservar" />
      </div>
    </div>
  )
}