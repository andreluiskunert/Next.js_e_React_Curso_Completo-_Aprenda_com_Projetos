import styles from "../styles/Porta.module.css"

export default function Porta(Props) {
    return (
        <div className={styles.area}>
            <div className={styles.frame}>
                <div className={styles.porta}> 
                <div className={styles.numero}> 3 </div>
               </div>
               <div className={styles.chao}></div>
         </div>
       </div>
    )
}