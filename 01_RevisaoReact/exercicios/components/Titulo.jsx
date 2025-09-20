export default function Titulo(props) {
    return props.pequeno? (
        <>
        <h1> {(props).principal} Titulo </h1>
        <h2> {(props).secundario}subtitulo</h2>
     
        </>
       
    ) : (
     
        <>
        <h1> {(props).principal} Titulo </h1>
        <h2> {(props).secundario}subtitulo</h2>
     
        </>
       
    )

    
}
