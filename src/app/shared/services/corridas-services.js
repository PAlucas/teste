import * as APIClient from "../../adapter/api/APIClient";

export const pesquisarCorridas = async (body) => {
    return APIClient.pesquisar(APIClient.URL_BUSCAR_CORRIDAS, body, {method: 'post'});
}
