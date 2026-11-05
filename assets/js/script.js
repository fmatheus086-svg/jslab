
console.log("JavaScript carregado com sucesso!");
let quantidade = 3;

console.log(quantidade);

quantidade = 5;

console.log(quantidade);

const nomeCurso = "Desenvolvimento de Interfaces Web";

console.log(nomeCurso);
const instituicao = "PUC Minas";

const nome = "Carlos";
const idade = 24;
const aprovado = true;
const endereco = undefined;
const observacao = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof aprovado);
const nomeCliente = "Ana";
const idadeCliente = 21;

const mensagemCliente =
    "Nome: " + nomeCliente + " | Idade: " + idadeCliente;

console.log(mensagemCliente);

const precoProduto = 120;
const quantidadeProduto = 3;

const subtotalProduto = precoProduto * quantidadeProduto;

console.log(subtotalProduto);
const idadeComparacao = 18;

console.log(idadeComparacao > 18);
console.log(idadeComparacao >= 18);
console.log(idadeComparacao < 18);
console.log(idadeComparacao <= 18);

const quantidadeComparacao = 10;

console.log(quantidadeComparacao === 10);
console.log(quantidadeComparacao !== 10);
console.log(10 === 10);
console.log(10 === "10");
const idadeEntrada = 20;
const possuiIngresso = true;

const podeEntrar =
    idadeEntrada >= 18 && possuiIngresso;

console.log(podeEntrar);

const nomeProdutoCompra = "Mouse";
const precoMouse = 100;
const quantidadeMouse = 2;
const percentualMouse = 10;
const disponivelMouse = true;
const subtotalMouse = precoMouse * quantidadeMouse;
const descontoMouse = subtotalMouse * percentualMouse / 100;
const totalMouse = subtotalMouse - descontoMouse;

console.log(`Produto: ${nomeProdutoCompra}`);
console.log(`Subtotal: R$ ${subtotalMouse}`);
console.log(`Desconto: R$ ${descontoMouse}`);
console.log(`Total: R$ ${totalMouse}`);
console.log(`Disponível: ${disponivelMouse}`);

console.log(typeof nomeProdutoCompra);
console.log(typeof precoMouse);
console.log(typeof disponivelMouse);

const notaAluno = 75;

if (notaAluno >= 60) {
    console.log("Aprovado");
}
const notaAvaliacao = 55;

if (notaAvaliacao >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

const notaClassificacao = 82;

if (notaClassificacao >= 90) {
    console.log("Excelente");
} else if (notaClassificacao >= 75) {
    console.log("Muito bom");
} else if (notaClassificacao >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
const notaFinalAluno = 70;
const frequenciaAluno = 80;

if (notaFinalAluno >= 60 && frequenciaAluno >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno não aprovado");
}
const prioridade = "alta";
const atrasado = true;

if (prioridade === "alta" && atrasado) {
    console.log("ATENÇÃO IMEDIATA");
} else {
    console.log("Acompanhamento normal");
}
const idadeUsuario = 20;
const possuiCadastro = true;
const usuarioBloqueado = false;

if (idadeUsuario >= 18 && possuiCadastro && !usuarioBloqueado) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}


console.log("Informação");
console.warn("Atenção");
console.error("Erro");
