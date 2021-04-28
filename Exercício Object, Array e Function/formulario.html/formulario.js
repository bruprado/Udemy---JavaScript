function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento){
    //     evento.preventDefault();
    //     alert(1);
    // };

    function recebeEventoForm(evento){
        evento.preventDefault(); //essa função faz a página parar de atualizar

        //variáveis criadas e chamadas pela classe no html
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //incluindo os dados através do push e declarando os valores através do objeto
        pessoas.push({
            nome: nome.value, //value serve para mostrar os valores
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas); //mostrando no console o array de pessoas

        resultado.innerHTML += `<p>Nome + Sobrenome: ${nome.value} ${sobrenome.value}, Peso:${peso.value}, Altura:${altura.value}.` //incluindo no html os valores digitados cada vez que clicar no submit
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
