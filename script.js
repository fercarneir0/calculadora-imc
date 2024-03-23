const name = document.getElementById("name");
const altura = document.getElementById('height');
const peso = document.getElementById('weight');


function calculaIMC(){
    let calculoImc = altura.value / peso.value;
}

console.log(calculaIMC);