import axios from 'axios';

export const URL_LOCALIDADES = 'localidade/buscarOrigenDestino/10';
export const URL_BUSCAR_CORRIDAS = 'consultacorrida/buscaCorrida';
  
const httpHeaders = {
  'Authorization':'Basic YXBpd2ViOndlYjEwMjAzMA==',
  'Content-Type': 'application/json'
};

async function getData(endpoint){
  try {
    let res = await axios({
      url: endpoint,
      method: 'get',
      timeout: 8000,
      headers: httpHeaders
    })
    if(res.status === 200){
      console.log(res.status)
    }    
    return res.data
  } catch (error) {
    console.error(error);
  }
}
  
export const pesquisarAninhada = async (endpoint) => {
  //const req = await axios.get(endpoint);
  const req = await axios({
    url: endpoint,
    method: 'get',
    timeout: 8000,
    headers: httpHeaders
  });

  const json = req.data;
  return json;
}

export const pesquisar = async (endpoint, body = {}, params = {}) => {
  return await axios({
    url: endpoint,
    method: params.method,
    timeout: 15000,
    headers: httpHeaders,
    data: body
  });
}

export const salvar = async (endpoint, params) => {
  return axios.get(endpoint);
}

export const excluir = async (endpoint, params) => {
  return axios.get(endpoint);
}    
