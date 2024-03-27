//criar um vetor 
const vetor = [1,2,3,4,5]
const array = new Array()
console.log(typeof vetor) 
console.log(typeof array)

// Referencia a um elemento/item no vetor 
const produtos = ['feijão', 'Arroz','Leite']
console.log(produtos[1])

//adicionar
//push()-> Final do array
//unshift()-> Inicio do vetor 
//splice(1,3 dado inserido)

//remover 

//pop()-> Remove no final 
//shift()-> remove no inicio 

const numeros = [1,2,3,4,5,6]
console.log(numeros.length)

const cidades = ['Maceio', 'Rio largo','Marechal']
console.log(`${cidades.toString()}
${cidades.join(";")}`)


const numeros = [6,5,4,7,89,10,2,3]

console.log(numeros.indexOf(2)) // pega o do inicio
 
console.log(numeros.lestIndexOf(2)) // pega o do final 