export function mega(qtde = 6, numeros = []){
    if(qtde < 6 && qtde > 60) {
        throw "quantidade invalido"
    }
    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2 )
    }
    const numeroAletorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAletorio)){
        return mega(qtde, [...numeros, numeroAletorio])
    } else {
        return mega(qtde, numeros)
    }
}
