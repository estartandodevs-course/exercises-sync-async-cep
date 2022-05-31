
const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";
const axios = require('axios')

async function getAddressByCep(cep) {
  try {
    const result = await axios.get(`${BASE_API_VIA_CEP}/${cep}/json/`)
    const logradouro = isLogradouroEmpty(result.data.logradouro);
    const bairro = isBairroEmpty(result.data.bairro);
    const localidade = result.data.localidade;
    const endereco = `${logradouro}, ${bairro} - ${localidade}`
    return (endereco)
  }
  catch (error) {
    throw new Error(error.statusText = "CEP não encontrado")
  }
}

function isLogradouroEmpty(logradouro) {
  if (logradouro === '') {
    return logradouro = '*'
  }
  else {
    return logradouro
  }
}
function isBairroEmpty(bairro) {
  if (bairro === '') {
    return bairro = '*'
  }
  else {
    return bairro
  }
}

getAddressByCep('01001000')

module.exports = { getAddressByCep };
