export default function Filho(props){
    //  "Passei no ENEM!"
    console.log(props.funcao)
    return (
        <>
        <h1> O Filho chama o Pai </h1>
         <button onClick={props.funcao}>Falar com o pai Nº01</button>

        <button onClick={
            () =>props.funcao("Passei no ENEM!!!", "Uhuuuu","Bora Encara a Facu kkkk", 10)


        }>Falar com o pai nº02</button>
        <>
        <marquee> Estou estudandoNext.js e React - Curso Completo - Aprenda com Projetos pela Cod3r
 </marquee>
        </>
        </>

    )
}