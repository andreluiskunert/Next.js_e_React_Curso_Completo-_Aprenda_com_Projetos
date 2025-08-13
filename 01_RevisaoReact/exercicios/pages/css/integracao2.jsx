// Não posso importar aqui!
// O import foi feito dentro de _app.js
// import "./intregacao1.css" 
import styles  from  "./integracao2.module.css"
export default function integracao2(){
     return (
        <div id={styles.integracao2}>
              <div className= {styles.vermelha}>Desenvolvimento</div>
            <div className={styles.azul}>Full</div>
            <div className={styles.green} >Stack</div>
        </div>
     )
}