const pacientes = []
// entrada de dados 
const inPaciente = docuemnt.getElementById('inPaciente')
console.log(`${inPaciente.toString()} - ${inPaciente.join("")}`)

//ações 
const btnAdicionar = document.getElementById('btnAdicionar')
const btnUrgencia = document.getElementById('btnUrgencia')
const btnAtender = document.getElementById('btnAtender')

//saida de dados 
const outAtendimento = document.getElementById('outAtendimento')
const outLista = document.getElementById('outLista')

const adicionarPaciente = () => {
   const paciente = inPaciente.value
   if(paciente === ''){
    alert('Preencha os dados corretamente')
    return
   }
   pacientes.push(paciente)

   let lista = ''
   pacientes.forEach((paciente, index) => {
      return lista += `${index}. ${paciente} \n`
   })

   outLista.textContent = lista 

   console.log(pacientes)
   inPaciente.value = ''
}; 
btnAdicionar.addEventListener('click', adicionarPaciente);

const adicionarUrgencia = () => {
 
   const paciente = inPaciente.value
   if(paciente === ''){
    alert('Preencha os dados corretamente')
    return
   }
   pacientes.unshift(paciente)

   let lista = ''
   pacientes.forEach((paciente, index) => {
      return lista += `${index}. ${paciente} \n`
   })

   outLista.textContent = lista 

   console.log(pacientes)
   inPaciente.value = ''
}
btnUrgencia.addEventListener('click', adicionarUrgencia)

const atenderPaciente = () => {
   if(pacientes.length === 0){
      alert('Não paciente na fila de espera')
      return
   }
   const atendiemnto = pacientes.shift()
   outAtendimento.textContent = atendiemnto

   let lista = ''
   pacientes.forEach((paciente, index) => {
      return lista += `${index}. ${paciente} \n`
   })

   outLista.textContent = lista
}

btnAtender.addEventListener('click', atenderPaciente)

//  const listaPacientes = []
//  //entrada de dados 

// const idPaciente = document.getElementById('idPaciente')

// const adicionar = () =>{
//     const paciente  = idPaciente.value
//     if(paciente === ''){
//         alert ('Preencha os dados corretamente')
//         return
//     }
// };
// listaPacientes.push(idPaciente)
// btnAdicionar.addEventListener('click' , adicionar)


// //ações
// const btnAdicionar = document.getElementById('btnAdicionar ')
// const btnUrgencia = document.getElementById('btnUrgencia ')
// const btnAtender = document.getElementById('btnAtender')

// //saida de dados 
// const outAtendimento = document.getElementById('outAtendimento ')
// const outLista = document.getElementById('outLista')