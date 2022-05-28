const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";
const axios = require('axios')

async function getAddressByCep(cep) {
  try {
    const result = await axios.get(`${BASE_API_VIA_CEP}/${cep}/json/`)
    const logradouro = (result.data.logradouro);
    const bairro = (result.data.bairro);
    const localidade = result.data.localidade;
    const endereco = `${logradouro}, ${bairro} - ${localidade}`
    return (endereco)
  }
  catch (error) {
    throw new Error(error.statusText = "CEP não encontrado")
  }
}

getAddressByCep('01001000')
module.exports = { getAddressByCep };