// JSX => {Misturar HTML com JS }
export default function  JSX04(){
    const subtitulo = "Estou no JavaScript"
    const trechH3 = <h3>{3 *3}</h3>
    return(
        <div>
          <h1> Aqui tem JXS#0</h1>
            <p> Estou dentro da div </p>
            <h2>{subtitulo}</h2>
            {trechH3}
            <h4>{Math.max(19, 43)}</h4>
            <h5>{entre(9.6, 1, 10)}</h5>

        </div>
    ) 
}
 function entre(valor, min, max) {
    if(valor > min && valor < max) {
        return "Sim"
    } else {
        return "Não"
    }
 }