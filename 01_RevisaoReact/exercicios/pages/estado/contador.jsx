import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDistplay"

export default function contador(){
   const [numero, setNumero] =  useState(0) 
   const dec = () => setNumero(numero -1)
    return (
        <div style={{
            display:"flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center"
        }}>
            <h1> Contador</h1>
            <ContadorDisplay numero={numero}/>
            <div> Valor:{numero}</div>
            <div>

             <button onClick={dec}> - </button>
            <button onClick={() => setNumero(numero + 1)}> + </button>
          </div>
           
         <marquee>Aqui tem desafio...</marquee>
        </div>
    )
}