import { useState } from "react";
import styles from "../styles/Contador.module.css"

export default function Contador(props)
{
    let [contador, contadorSet] = useState(props.valor ? props.valor : 0);

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>CONTADOR</h2>
            <span className={styles.contador}>{contador}</span>
            <button className={styles.btn} onClick={() => contador < 99 ? contadorSet(contador + 1) : contador}>+</button>
            <button className={styles.btn} onClick={() => contador > 0 ? contadorSet(contador - 1) : 0}>-</button>
        </div>
    )

}