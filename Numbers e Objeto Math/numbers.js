let num1 = 1;
let num2 = 2.5;

//fazendo numero se transformar em string temporariamente
console.log(num1.toString() + num2); //no caso aqui haverá a concatenação
console.log(typeof num1);

// alterando ele definitivamente em string
num1 = num1.toString();
console.log(typeof num1);

let num3 = 1500;
console.log(num3.toString(2)); //representação binária deste valor

let num4 = 10.587456321;
console.log(num4.toFixed(2)); //determinando a quantidade de casas decimais após a vírgula

num5 = 10;
console.log(Number.isInteger(num5)); //retorna true ou false, esse função diz se é um número inteiro.

num6 = 10.25;
console.log(Number.isInteger(num6)); //agora retornará false pois o valor não é inteiro.

let temp = num6 * 'ola';
console.log(Number.isNaN(temp)); //retorna true ou false, diz se a variável é NaN.

let num7 = 0.7;
let num8 = 0.1;
num7 += num8; // teoricamente 0.8
num7 += num8; // teoricamente 0.9
num7 += num8; // teoricamente 1.0
console.log(num7); // ao exibir temos o valor de 0.99999999
num7 = parseFloat(num7.toFixed(2)); //dessa maneira conseguimos corrigir, podemos utilizar também o Number ao invés de parseFloat.
console.log(num7); //agora será exibido 1.0

//também podemos resolver esse problema de outra forma, fazendo contas, por exemplo: num7 = ((num7 * 100) + (num8 * 100)) / 100; Ai conseguimos obter o 0.8