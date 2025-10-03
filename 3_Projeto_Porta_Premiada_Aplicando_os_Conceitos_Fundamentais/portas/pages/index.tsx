import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    
    <div className={styles.formulario}>
      
     
      <h1> Jogos das portas</h1>
      <p>Este jogo irei usar futuramente no meu portfolio,Tente sua sorte: </p>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Boa sorte!!!</h1> 
          <h2> </h2>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtde Portas?"
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente?"
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
    
      </div>
      <p>Desenvolvimento Por <a href="https://github.com/andreluiskunert">ALKTECNO</a>  com base no <a href="https://www.udemy.com/course/nextjs-e-react/?couponCode=2021PM25">curso de Next.js e React - Curso Completo - Aprenda com Projetos</a> 
</p>
    </div>
  )
}