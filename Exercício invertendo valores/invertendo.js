// Invertendo os valores de lugar;

let varA = 1; //2
let varB = 2; //3
let varC = 3; //1

const varAux = varA; // variável auxiliar para não perder o valor da varA.

varA = varB;
varB = varC;
varC = varAux;

console.log (varA, varB, varC);

// ou podemos resolver da seguinte forma também:

// [varA, varB, varC] = [varB, varC, varA];