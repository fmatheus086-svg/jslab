
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
