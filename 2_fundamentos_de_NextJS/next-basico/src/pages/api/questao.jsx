import { useEffect, useState } from "react"

export default function questao(){
    const [questao, setQuestao] = useState(null)
    useEffect(()=> {  
     fetch('http://localhost:3000/api/questao/123')
    .then(resp => resp.json)
    .then(json => console.log(json))

    }, [])
    function renderizarRespostas(){
        if(questao){
            return questao.respostas.map((resp, i ) =>{
                return <li key={i}>{resp}</li>
            })
        }
        return false
    }
   

    return (
   <div>
    <h1>Questão01: </h1>
     <span>{questao?.enunciado} </span>
     <ul>
        {renderizarRespostas()}
     </ul>
   </div>
    )
}