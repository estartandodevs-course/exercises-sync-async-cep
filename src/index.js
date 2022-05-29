const axios = require('axios')
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

const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";

/*
    TODO 1:
    - Implemente a função getAddressByCep com o recurso de Async/Await.
    - A função deve retornar nesse formato: logradouro, bairro - localidade.
    - A função deve retornar o erro `CEP não encontrado` caso o cep não seja encontrado.
*/

async function getAddressByCep(cep) {
  try {

    const result = await axios.get(`${BASE_API_VIA_CEP}${cep}/json`);
    const { logradouro: logradouro, bairro: bairro, localidade: localidade } = result.data
    return(`${logradouro}, ${bairro} - ${localidade}`);

  } catch (error) {

    throw new Error(`CEP não encontrado`)

  }

}


module.exports = { getAddressByCep };
