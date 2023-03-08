import * as APIClient from "../../adapter/api/APIClient";

export const pesquisar = () => ([
    { id: '1', title: 'Ida e Volta' },
    { id: '2', title: 'Somente Ida' },
    { id: '3', title: 'Multi trecho' },
])

export const pesquisarLocalidades = async () => {
    return APIClient.pesquisar(APIClient.URL_LOCALIDADES, {}, {method: 'get'});
}
