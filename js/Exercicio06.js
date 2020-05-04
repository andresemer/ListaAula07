var opc;

opc = prompt("1. Quadrado \n 2. Retangulo, \n 3.Triangulo Retangulo \n 4. Circulo \n Informe qual area voce deseja calcular selecionando o numero:");

if(opc == 1){
    var lado = 0;

    lado = prompt("Digite o lado do quadrado: ")

    lado = lado * lado;

    alert("A area e: " + lado);
}else if(opc == 2){
    var base = 0, altura = 0, area = 0;

    base = prompt("Digite a base do retangulo: ");
    altura = prompt("Digite a altura do retangulo: ");

    area = base * altura;

    alert("A area e: " + area);
}else if(opc == 3){
    var base = 0, altura = 0, area = 0;

    base = prompt("Digite a base do triangulo retangulo: ");
    altura = prompt("Digite a altura do triangulo retangulo: ");

    area = (base * altura) / 2;

    alert("A area e: " + area);

}else if(opc == 4){
    var pi = 3.14, area = 0, raio = 0;

    raio = prompt("Digite o raio do circulo");

    area = pi * (raio * raio);  

    alert("A area e: " + area);
}else{
    alert("Opcao invalida");
}

