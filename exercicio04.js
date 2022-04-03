// Escreva um programa que pergunte a quantidade de km percorridos por
// um carro alugado pelo usuário, assim como a quantidade de dias pelos
// quais o carro foi alugado. Calcule o preço a pagar, sabendo que o
// carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let quantidadeKm = 200
let dias = 20
let valorTotal = (dias * 60) + (200 * 0.15)

console.log("O carro foi alugado por " + dias + " dias e andou " + quantidadeKm
+ "km. Logo, o preço total a pagar é de R$" + valorTotal + ".")

