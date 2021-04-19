let numero = Number(prompt("Digite um número"));
const numeroTitulo = document.getElementById("titulo").innerHTML = numero;

// numeroTitulo.innerHTML = numero;

document.getElementById('num').innerHTML = numero;
document.getElementById('raiz').innerHTML = Math.sqrt(numero);
document.getElementById('inteiro').innerHTML = Number.isInteger(numero);
document.getElementById('nan').innerHTML = Number.isNaN(numero);
document.getElementById('baixo').innerHTML = Math.floor(numero);
document.getElementById('cima').innerHTML = Math.ceil(numero);
document.getElementById('decimais').innerHTML = numero.toFixed(2);

//também poderíamos ter feito de outra forma, por exemplo: criar uma span no html somente com o id texto e depois chamar ele no javascript e ir incremento.

// exemplo: texto.innerHTML = "";
// texto.innerHTML += '<p>raiz quadrada: ${numero ** 0.5}. </p>';