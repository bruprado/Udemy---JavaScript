function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

//a partir do momento que coloco o return na minha função ela entende que acabou. então se colocar qualquer coisa abaixo de return não será exibido ou executado.

// const raiz = function (n) {
//     return n ** 0.5;
// };

// OU podemos fazer a função acima da seguinte forma:
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
