const produto = "Notebook";
const preco = 3500;
const quantidade = 2;

const mensagem = "O produto " + produto + " custa R$ " + preco + " e você comprou " + quantidade + " unidades. Total: R$ " + (preco * quantidade) + ". (Concatenado)";

console.log(mensagem);

const mensagem2 = `O produto ${produto} custa R$ ${preco} e você comprou ${quantidade} unidades. Total R$ ${preco*quantidade}. (Interpolado)`
console.log(mensagem2)