//               0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos); //irá mostrar os 3 itens que tenho dentro do meu array

alunos.push('Luiza'); //vou incluir mais um nome no final da lista do array
alunos.push('Fábio');

console.log(alunos); //agora irá mostrar o array atualizado com as duas inclusões que fiz anteriormente

console.log(alunos[0]); //irá mostrar o elemento que está dentro do índice 0, ou seja, Luiz.

alunos[0] = 'Eduardo'; //dessa maneira estou substituindo o valor que estava no índice zero por este novo.
console.log(alunos[0]);

console.log(alunos.length); //me dá a quantidade de itens dentro do array, lembrando que a quantidade do índice é sempre 1 a menos que a quantidade de itens, ou seja, 5 itens e 4 índices (pois inicia no 0)

alunos[alunos.length] = 'Maria';
alunos[alunos.length] = 'Pedro';
//dessa maneira estou fazendo inclusões no array sem saber o tamanho dele
console.log(alunos);

alunos.unshift('Carla'); //dessa forma incluo o valor no primeiro índice (0)
console.log(alunos);

//remover elemento do final do array
// alunos.pop();
const removido = alunos.pop(); //posso salvar numa variável os itens removidos do array
const remComeco = alunos.shift(); //remove item do começo do array, prestar atenção que com isso os índices serão alterados, quem era 1 passa a ser 0, quem era 2 passa a ser 1, etc
console.log(alunos);
console.log(removido);
console.log(remComeco);

//também existe a possibilidade de deletar um elemento do array sem mudar a ordem dos índices, exemplo abaixo
delete alunos[1];
console.log(alunos);

//também posso fatiar meu array, pedindo para mostrar somente uma 'fatia' dele, exemplo abaixo
console.log(alunos.slice(0,3)); //lembrando que se quero que mostre até o índice 2 devo adicionar mais um, pois o último solicitado não é mostrado.
// ou também podemos fazer de trás para frente, por exemplo colocando o segundo valor negativo, ou seja, irá pegar o tamanho do meu array (5) menos o valor digitado (-2) e irá mostrar neste intervalo (3).