/*
Para este exercício utilize o recurso de Async/Await do Javascript.
Será necessário buscar as informações em uma api externa (ViaCep).
Baixar o resultado, tratar o retorno para mostrar logradouro, bairro - localidade. 

Exemplo de resultado obtido na api ViaCep:=
    {
      "cep": "01001-000",
      "logradouro": "Praça da Sé",
      "complemento": "lado ímpar",
      "bairro": "Sé",
      "localidade": "São Paulo",
      "uf": "SP",
      "ibge": "3550308",
      "gia": "1004",
      "ddd": "11",
      "siafi": "7107"
    }
      
Exemplo de como a função deve retornar: 

"Praça da Sé, Sé - São Paulo"

Documentação da API:  https://viacep.com.br/

*/

const axios = require("axios");

const URL = "https://viacep.com.br/ws/";

async function getAddressByCep(cep) {

  const address = await axios.get(`${URL}/${cep}/json/`);
  
  try {

    const address = await axios.get(`${URL}/${cep}/json/`);
    console.log("address", address.data.logradouro);
    console.log("address", address.data.bairro);
    console.log("address", address.data.localidade);

  }
  catch (error){

    console.log("CEP não encontrado!");

  }
}

getAddressByCep("50960140");
module.exports = { getAddressByCep };
