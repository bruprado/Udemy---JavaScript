const nome = 'Bruna';
const sobrenome = 'Prado';
const idade = 26;
const peso = 52;
const altura = 1.56;
let imc = peso / (altura * altura);
let anoNascimento = 2020 - idade;

//podemos escrever de três formas diferentes
//primeira forma.
console.log (nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg.");
//segunda forma - não cria espaços quando colocamos o + para concatenar, temos que dar o espaço dentro das aspas para não colar junto com a variável.
console.log ('Tem ' + altura + ' de altura e seu IMC é de ' + imc);
// terceira forma: também pode-se utilizar as crases e escrever da forma abaixo.
console.log (`${nome} ${sobrenome} nasceu em  ${anoNascimento}`);