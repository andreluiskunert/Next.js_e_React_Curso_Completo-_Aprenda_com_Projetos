import styles from "../styles/Porta.module.css"

interface PortaProps {
  numero: number
  selecionada: boolean
}

export default function Porta(props: PortaProps) {
  return (
    <div className={styles.area}>
      {/* se a porta estiver selecionada, aplica a classe */}
      <div className={`${styles.estrutura} ${props.selecionada ? styles.selecionada : ''}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{props.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
        <div className={styles.chao}></div>
      </div>
    </div>
  )
}
