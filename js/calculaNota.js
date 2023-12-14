var btnResultado = document.querySelector('#btnResultado');

btnResultado.addEventListener('click', function(event){
    event.preventDefault();

    var resultado = document.querySelector('#resultadoFinal');
    var nota1 = document.querySelector('#nota1');
    var num1 = parseFloat(nota1.value);
    var nota2 = document.querySelector('#nota2');
    var num2 = parseFloat(nota2.value);
    var nota3 = document.querySelector('#nota3');
    var num3 = parseFloat(nota3.value);
    var materia = document.querySelector('#materia');
    var mt = materia.value;

    var erro = validacao(num1, num2, num3, resultado, mt);    
    
    if (erro.length > 0) {
        exibeMensagensErro(erro);
        return;
    }

    var erros = document.querySelector('#resultadoFinalErro');
    erros.innerHTML = "";
})

function exibeMensagensErro(erro){
    var ulErro = document.querySelector("#resultadoFinalErro");
    ulErro.innerHTML = "";

    erro.forEach(function(erro){
        var liErro = document.createElement('li');

        liErro.textContent = erro;
        ulErro.appendChild(liErro);
    });
}


function validacao(num1, num2, num3, resultado, mt) {
    var erro = [];

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        erro.push("O valor digitado está incorreto, digite um número!");

    }else if (num1 > 10 || num2 > 10 || num3 > 10) {
        erro.push("O número digitado não pode ser maior que 10, digite um número válido!");
    }else{
        calcular(num1, num2, num3,resultado, mt);
    }

    return erro;
}


function calcular(num1, num2, num3, resultado, mt){
    conta = 0;

    conta = ((num1*3) + (num2*3) + (num3*4)) / 10 ;

    resultado.innerHTML = "Sua nota final em " + mt + " é " + conta;
}



