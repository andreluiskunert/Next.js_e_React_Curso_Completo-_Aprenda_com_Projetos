export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}
export default function estatico(){
    return(
        <div>
            <span>
                Aleatório :{numero.props}
            </span>
        </div>
    )
}