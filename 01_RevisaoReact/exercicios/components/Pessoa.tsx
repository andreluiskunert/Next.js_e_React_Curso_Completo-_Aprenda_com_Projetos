import React from "react";

type PessoaProps = {
  nome: string;
  idade: number;
};

export default function Pessoa({ nome, idade }: PessoaProps) {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
    </div>
  );
}