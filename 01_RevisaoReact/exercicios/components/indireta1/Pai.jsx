import Filho from "./Filho";

export default function Pai(props){
    
    function falarComigo(param1, param2, param3){
        console.log(param1, param2, param3)
    }
    return (
        <>
        {/* <Filho prop1={357} prop2="abc"/> */}
          
          <Filho funcao={falarComigo}/>
          
        </>
    )
}