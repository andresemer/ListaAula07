var peso = 0, altura = 0, imc;

peso = prompt("Informe seu peso: ");
altura = prompt("Informe sua altura: ");

peso = parseFloat(peso);
altura = parseFloat(altura);
imc = parseFloat(peso);

imc = peso / (altura * altura);



if(imc < 18.5){
    alert("Peso abaixo do normal");
}else if(imc >= 18.5 && imc < 24.9){
    alert("Peso Ideal");
}else if(imc >= 25 && imc < 29.9){
    alert("Acima do peso");
}else if(imc >= 30 && imc < 34.9){
    alert("Obesidade Grau 1");
}else if(imc >= 35 && imc <= 40){
    alert("Obesidade Grau 2");
}else if(imc > 40){
    alert("Obesidade Grau 3")
}

