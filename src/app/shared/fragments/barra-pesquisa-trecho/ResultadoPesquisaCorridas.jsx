import React from 'react'

import { RJControls } from '../../controls/RJControls'

export const ResultadoPesquisaCorridas = (props) => {

    const { options } = props;
  
    //const {empresa, horaIda, horaVolta, origem, destino, classe, poltronasLivres, preco, ...other} = props;

  return (
    <>
    {
        options.map(
            item => (<RJControls.RJCard 
                empresa={item.empresa}
                horaIda={item.saida}
                horaVolta={item.chegada}
                origem={item.origem}
                destino={item.destino}
                classe={item.classe}
                poltronasLivres={item.poltronasLivres}
                preco={item.preco}
                key={item.id}
                />)
        )
    }
    </>
    
  );

}
