const axios = require('axios');
const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";

async function getAddressByCep(cep) {
  try {
    const res = await axios.get(`${BASE_API_VIA_CEP}/${cep}/json`)
    return (`${res.data.logradouro}, ${res.data.bairro} - ${res.data.localidade}`);
  }
  catch(error) {
    throw new Error('CEP não encontrado')
  }
}

module.exports = { getAddressByCep };
