const carros = []
const inModelo = document.getElementById('inModelo')
const inPreco = document.getElementById('inPreco')

const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnFiltrar = document.getElementById('btnFiltrar')

const outLista = document.getElementById('outLista')

const adicionarCarro = () => {
    const modelo = inModelo.value
    const preco = Number(inPreco.value)
  
    if(modelo === '' || preco === 0 || isNaN(preco)){
      alert('Digite os valores corretos')
      return
    }

    carros.push({modelo: modelo, preco: preco})
    console.log(carros)
    inModelo.value = ''
    inPreco.value = ''
};
btnAdicionar.addEventListener("click", adicionarCarro);

const listaCarro = () => {
  if(carros.length == 0){
    alert('Não tem carro no sistema')
    return
  }
  let lista = ''
  carros.forEach((carro)  => {
     return (lista += `${carro.modelo} = R$${carro.preco} \n`)
  })
  console.log(lista)
  outLista.textContent = lista
};
btnListar.addEventListener("click", listaCarro)

const filtarPorCarro = () => {
  const valorMaximo = Number(prompt('Digite o valor máximo'))

  if(valorMaximo === 0 || isNaN(valorMaximo)){
    alert('Preencha o campo corretamente')
    return;
  }

  const carrosFiltros = carros.filter((carros) => carros.preco <= valorMaximo)
  console.log(carrosFiltros)
};
btnFiltrar.addEventListener("click", filtarPorCarro);


// const filtrarPorPreco = ()=>{
//     const valorMaximo = Number(prompt('Digite o valor maximo'))
//     if(valorMaximo ===0 || isNaN(valorMaximo)){
//         alert('Prencha o campo corretamente ');
//         return;
//     }const carrosFiltros = carros.filter((carro) => carro.preco <= valorMaximo)
// console.log(carrosFiltros)
// };

// btnFiltar.addEventListener("click", filtrarPorPreco);