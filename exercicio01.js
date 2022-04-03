//Solicite o preço de uma mercadoria e o percentual de desconto 20%.
// Exiba no console o valor do desconto e o preço a pagar.

const valor = 200
let desconto = (valor / 100) * 20
let valorComDesconto = valor - desconto
console.log("O valor original é de R$" + valor)
console.log("O valor com desconto é de R$" + valorComDesconto)
