import Link from "next/link"
import styles from "../styles/FrontPage.module.css"

export default function FrontPage() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <h1>Projeto Monte Hall</h1>
        <p>Uma jornada de lógica, probabilidade e programação interativa</p>
      </header>

      <main className={styles.main}>
        <section>
          <h2>📘 Introdução ao Projeto</h2>
          <p>
            Neste módulo, vamos desenvolver um projeto fascinante que une conceitos de <span className={styles.highlight}>IED</span> e <span className={styles.highlight}>Next.js</span>. 
            Nosso desafio é o famoso <span className={styles.highlight}>Problema de Monte Hall</span> — inspirado em um programa de auditório, 
            onde o participante deve escolher entre três portas, e apenas uma delas esconde o prêmio.
          </p>
        </section>

        <section>
          <h2>🎯 O Desafio</h2>
          <p>
            O participante escolhe uma das <strong>três portas</strong>. Apenas o apresentador sabe qual porta contém o prêmio.
            Após a escolha inicial, o apresentador abre uma das portas erradas e pergunta:
          </p>
          <div className={styles.example}>
            “Você quer manter sua escolha ou trocar de porta?”
          </div>
          <p>
            Essa pergunta é o coração do problema. Trocar de porta realmente faz diferença?
            A resposta é sim! Trocar aumenta suas chances de vitória de <strong>33%</strong> para <strong>66%</strong>.
          </p>
        </section>

        <section>
          <h2>🧩 Explorando a Lógica</h2>
          <p>
            Inicialmente, o jogador tem 1/3 de chance de escolher a porta correta. 
            Quando o apresentador revela uma porta sem prêmio, as probabilidades mudam. 
            Trocar de porta é sempre mais vantajoso, pois as chances se redistribuem.
          </p>

          <p>
            O projeto permitirá simular o jogo com qualquer quantidade de portas — por exemplo, <strong>10 portas</strong>.
            Apenas uma delas conterá o prêmio. O sistema calculará automaticamente a probabilidade e mostrará visualmente o resultado.
          </p>
        </section>

        <section>
          <h2>💻 O Que Vamos Construir</h2>
          <p>
            Nossa aplicação terá:
          </p>
          <ul>
            <li>Formulário para escolher o número de portas e a porta premiada.</li>
            <li>Validação para impedir entradas inválidas.</li>
            <li>Simulação interativa de seleção e abertura das portas.</li>
            <li>Feedback visual com portas abertas, fechadas e premiadas.</li>
          </ul>
          <p>
            Tudo isso com interface acessível, responsiva e visualmente clara para o aprendizado.
          </p>
          <Link href="/" className={styles.btn}>Voltar ao Formulário 🚀</Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Desenvolvido para fins educacionais • Projeto Monte Hall • 2025</p>
      </footer>
    </div>
  )
}
