import Filho from "./Filho";

export default function Pai(props) {
    return(
        <>
        <h1> {props.familia} </h1>
        <Filho nome="Pedro" familia= "Pintinho"/>
        <Filho nome="Joana" familia= "Pintinho"/>
         <Filho nome="Lucas" familia= "Pintinho"/>
        <Filho nome="Gaby" {...props}/>
        </>
    )
}