import Titulo from "../../components/Titulo"
export default function usandoTitulo(){
    return(
        <div>
            <Titulo
             principal="pagina de Cadastrado"
                    secundaria="Incluir, Alterar e Excluir Coisas"  
                      />
                       <Titulo
             principal="Pagina de Login:"
                    secundaria="Informe seu email e senha:"  
                    pequeno = {true}
                      />
        </div>
    )
}