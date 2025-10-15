export function getStaticProps(){
   return {
     props:{
        numero: Math.random()
     }
   }
}
export default function Estatico2(props) {
    return(
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
            <p>aqui texto sobre estático #02</p>
        </div>
    )
}