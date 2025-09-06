import Porta from "../components/Porta"

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center", // centraliza na horizontal
      alignItems: "center",     // centraliza na vertical
      height: "100vh"           // ocupa a tela toda para centralizar no meio
    }}>
      <Porta numero={1} selecionada={false} />
      <Porta numero={2} selecionada={true} />
      <Porta numero={3} selecionada={false} />
    </div>
  )
}

