var num1, num2, num3, num4, valores, resultado;

num1 = prompt("Digite o primeiro valor: ");
num2 = prompt("Digite o segundo valor: ");
num3 = prompt("Digite o terceiro valor: ");
num4 = prompt("Digite o quarto valor: ");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);


valores = [num1, num2, num3, num4];

console.log(valores);

resultado = valores.sort();

alert("Menor valor: " + valores[0]);
alert("Maior valor: " + valores[(valores.length - 1)]);

var media = 0;

for(var i = 0; i < valores.length; i++){
    media = media + valores[i];
}

media = parseFloat(media);

alert("Media dos valores: " + media/4);