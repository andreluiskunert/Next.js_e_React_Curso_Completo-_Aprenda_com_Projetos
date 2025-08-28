import Link from 'next/link'
import router from 'next/router'

export default function Rotas() {
    function navegacaoSimples(url){
        router.push(url)
    }
    function navegacaoComParams(){
        router.push({
            pathname: "/rotas/params",
            query:{
                id: 123,
                nome: 'Ana'
            }
        })
    }
     return (
        <div>
            <h1> Rotas Intex</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Ana">
                <li>Params</li>
                </Link>
                 <Link href="/rotas/123/buscar">
                <li>Buscar</li>
                </Link>
                 <Link href="/rotas/43/AndreLuis">
                <li>AndreLuis</li>
                </Link>
            </ul>
            <div style={{ display:"flex", direction:"column", algigItems: "flex-start"}}>
            <button onClick={() => router.push("/rotas/123/buscar")}> Buscar</button>
            <button onClick={navegacaoComParams}> Params </button>
            <button onClick={() => navegacaoSimples("/rotas/43/AndreLuis")}> Andre</button>

            </div>
        </div>
     )
   
}