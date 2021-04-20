// const pessoa1 = {
//  nome: 'Luiz',
//  sobrenome: 'Miranda',
//  idade: 25
// }; //isso é um objeto

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

//podemos fazer uma função para isso conforme abaixo ***********

function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Bruna', 'Prado', 26);
const pessoa3 = criaPessoa('Jeann', 'Chuab', 32);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa2.nome);