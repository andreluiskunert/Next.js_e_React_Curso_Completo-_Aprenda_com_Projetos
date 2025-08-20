import { useState } from "react"

export default function mouse() {
    // React Hooks
  const [x, setX] = useState(0)
  
//  Y
  const arrayY = useState(0)
  let y = arrayY[0]
  const alterarY = arrayY[1]

    
 
    const estilo = {
      display:"flex",
      flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
     backgroundColor: "#222",
     color: "#FFFF",
     height:"100vh"
    }
    function quantoMover(ev){
      setX(ev.clientX)
     alterarY(ev.clientY)

      console.log('Valor Alterado...')
    }
  return (
   <div style={estilo}onMouseMove={quantoMover}>
    <span> Eixo x : {x} </span>
     <span> Eixo y : {y} </span>
   </div>
  )
    
}