
const findEstados = () => {
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(response => response.json())
.then(json => {
    let inputEstado = document.getElementById('estado')
     
    let estados = ''
     json.forEach(estado => 
       estados += `<option value=${estado.sigla}>${estado.nome}<option>`
       
     );
     
     console.log(estados)
     inputEstado.innerHTML = estados
    })
}
findEstados()

function findByCep()  {
  //pega o valor docep digitado pelo usuario através do id cep do HTML
  let cepValue = cep.value
  console.log(cepValue)

  fetch(`http://viacep.com.br/ws/${cepValue}/json/`)
  .then(response => response.json())
  .then(data => {
      preencherCampos(data)
    
  })
}

const preencherCampos = json => {
  console.log(json)
  logradouro.value = json.logradouro
  numero.focus()
  bairro.value = json.bairro

}