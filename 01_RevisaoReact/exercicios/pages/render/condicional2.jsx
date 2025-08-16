import If from "../../components/If";

export default function condicional1() {
    const numero = 5
    return (
        <>
          <If teste ={numero % 2 === 0}>
            O número {numero} é par...
          </If>
           <If teste ={numero % 2 === 1}>
            O número {numero} é impar...
          </If>
        </>
      
    )
}