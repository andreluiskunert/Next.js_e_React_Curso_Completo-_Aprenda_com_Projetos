export  function getServerSideProps(){
     console.log('[Server] gerando  Props pra o componente..')
    return {
        props :{
            numero: Math.random()
        }
    }
}

export default function Dinamico1(props){
    return (
        <div>
            <h1>Dinamico01</h1>
            <p>Aqui tem Dinamico #01</p>
            <marquee> explica sobre assunto</marquee>
            <h2>{props.numero}</h2>
        </div>
    )
}