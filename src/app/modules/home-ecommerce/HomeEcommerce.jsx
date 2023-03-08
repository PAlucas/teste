import React from 'react'

import { CabecalhoEcommerce } from '../../shared/fragments/cabecalho-ecommerce/CabecalhoEcommerce';
import { RodapeEcommerce } from '../../shared/fragments/rodape-ecommerce/RodapeEcommerce';
import { BarraPesquisaTrecho } from '../../shared/fragments/barra-pesquisa-trecho/BarraPesquisaTrecho';

export const HomeEcommerce = () => {
    
    return (
       <>
          <CabecalhoEcommerce />
          <BarraPesquisaTrecho />
          <RodapeEcommerce />
       </>
    )
}
