export default function Estilo(props) {
    // const classeAplicada = props.numero >= 0 ? "azul" : "vermelha"
    return (
        <>
        <h1 style={{backgroundColor:  props.numero ,  
         color:props.color,
         textoAlign: props.direita ? "right" : "left"
         }} >

              Desenvolvimento Full Stack_
        </h1>
     <h2 className={props.numero >= 0 ? "#2D2" :"#D22"}>  EaD_Estácio_2028 </h2>
        </>
    )
}