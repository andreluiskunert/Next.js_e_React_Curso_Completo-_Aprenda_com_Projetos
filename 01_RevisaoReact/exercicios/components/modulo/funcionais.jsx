export function Comp1() {
    return <h2> Comp #01 </h2>
 }
 export const Comp2 = function(){
    return <h3> Comp2 </h3>
 }
 export const comp4 = () => {
    return   <h4> Comp #04</h4>
 }
   
export const Comp5 =()  => <h5> Comp #05 </h5>

export const Comp6 = props  => (
    <div>
        <h6> Comp #06{props.msg}</h6>
    </div>
) 
export {
    Comp5 ,Comp6,
}