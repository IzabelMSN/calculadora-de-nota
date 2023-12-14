var botaoResultado = document.querySelector('#rBtn');

botaoResultado.addEventListener('click', function(event){
    event.preventDefault();

    var resultado = document.querySelector('#rConta');
    var nota1 = document.querySelector('#n1');
    var n1 = parseFloat(nota1.value);
    var nota2 = document.querySelector('#n2');
    var n2 = parseFloat(nota2.value);
    var materia = document.querySelector('#rMateria');
    var mt = materia.value;

    var erros = validacoes(n1, n2, resultado, mt);    
    
    if (erros.length > 0) {
        exibeMensagensErros(erros);
        return;
    }

    var erro = document.querySelector('#resultadoFinalErros');
    erro.innerHTML = "";
});

function exibeMensagensErros(erros){
    var ulErros = document.querySelector("#resultadoFinalErros");
    ulErros.innerHTML = "";

    erros.forEach(function(erros){
        var liErros = document.createElement('li');

        liErros.textContent = erros;
        ulErros.appendChild(liErros);
    });
}


function validacoes(n1, n2, resultado, mt) {
    var erros = [];

    if(isNaN(n1) || isNaN(n2)){
        erros.push("O valor digitado está incorreto, digite um número");

    }else if(n1 > 10 || n2 > 10){
        erros.push("O número digitado não pode ser maior que 10, digite um número válido!");
    }else{
        calcula(n1, n2, resultado, mt);
    }

    return erros;
}


function calcula(n1, n2, resultado, mt){
    conta = 0;
    conta = (60 - ((n1*3) + (n2*3))) / 4 ;

    resultado.innerHTML = "Você precisa de " + conta + " para passar em " + mt;
}

