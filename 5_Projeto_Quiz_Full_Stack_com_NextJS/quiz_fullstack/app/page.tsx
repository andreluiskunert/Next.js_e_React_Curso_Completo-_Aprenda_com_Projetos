import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-10 py-20 px-10 bg-white dark:bg-zinc-900 sm:items-start">
        
        {/* FOTO DO GITHUB */}
        <Image
          src="https://github.com/andreluiskunert.png"
          alt="Foto do GitHub de André Luis Kunert"
          width={140}
          height={140}
          className="rounded-full border border-zinc-300 shadow-lg dark:border-zinc-700"
        />

        {/* TÍTULO */}
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 text-center sm:text-left">
          Bem-vindo ao meu portfólio!
        </h1>

        {/* DESCRIÇÃO */}
        <p className="max-w-xl text-lg leading-7 text-zinc-700 dark:text-zinc-400 text-center sm:text-left">
          Sou <strong>André Luis Kunert</strong>, desenvolvedor Full Stack.  
          No meu GitHub você encontra projetos com <strong>React</strong>, <strong>Next.js</strong>,
          <strong> Angular</strong>, <strong>Laravel</strong> e muito mais.
        </p>

        {/* LINK PARA O GITHUB */}
        <a
          href="https://github.com/andreluiskunert"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-lg font-semibold shadow hover:scale-105 transition-transform"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={26}
            height={26}
            className="dark:invert"
          />
          Acessar meu GitHub
        </a>

        {/* TEXTO EM MOVIMENTO */}
        <marquee className="mt-10 text-lg font-medium text-zinc-700 dark:text-zinc-300">
          Desenvolvido com Next.js + React • Projetos no GitHub • Full Stack Developer
        </marquee>
{/* Estão revisão... */}
      </main>
    </div>
  );
}
