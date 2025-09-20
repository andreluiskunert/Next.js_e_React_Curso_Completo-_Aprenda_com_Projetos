function gerarLista(final = 10) {
    const lista = []
    for(let i = 1; i <= final; i++) {
        lista.push(<span>{i}</span>)

    }
    return lista
}
export default function lista3() {
    return (
        <div>
            <h2>Desafios de Lista:</h2>
            <h3>lista2: </h3>
            <div>
                {gerarLista()}
            </div>
            <div>
                {gerarLista(15)}
            </div>
            <div>
                {gerarLista(20)}
            </div>
        </div>
    )
}