import QuestaoModel from '@/model/questao'
import Questao from '@/components/Questao'
import RespostaModel from '@/model/resposta'

export default function Home() {

  const questaoTeste = new QuestaoModel(
    1,
    'Melhor cor?',
    [
      RespostaModel.errada('Verde'),
      RespostaModel.errada('Vermelha'),
      RespostaModel.errada('Azul'),
      RespostaModel.certa('Preta'),
    ]
  )

  function respostaFornecida(indice: number) {
    console.log("Resposta marcada:", indice)
  }

  function tempoEsgotado() {
    console.log("Tempo esgotado!")
  }

  return (
    <Questao
      valor={questaoTeste}
      respostaFornecida={respostaFornecida}
      tempoEsgotado={tempoEsgotado}
    />
  )
}
