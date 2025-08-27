import '../styles/globals'
function MyAPP({Componente, pageProps}){
    return <Componente{...pageProps}/>
}
export default MyAPP