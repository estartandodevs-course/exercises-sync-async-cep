const axios = require("axios");
const BASE_API_VIA_CEP = "https://viacep.com.br/ws/";


async function getAddressByCep(cep) {
  try {
    const result = await axios.get(`${BASE_API_VIA_CEP}${cep}/json/`);
    const { logradouro, bairro, localidade} = result.data;
    return `${logradouro}, ${bairro} - ${localidade}`;
  } catch (error) {
    throw new Error("CEP não encontrado");
  }
}


module.exports = { getAddressByCep };
