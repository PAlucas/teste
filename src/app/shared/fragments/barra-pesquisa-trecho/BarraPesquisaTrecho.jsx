import React, { useState, useEffect } from 'react'

import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { RJControls } from '../../controls/RJControls'
import  * as service  from '../../services/localidade-service'
import  * as serviceCorridas  from '../../services/corridas-services'
import { ResultadoPesquisaCorridas } from './ResultadoPesquisaCorridas';

const initialFormValues = {
  tipoTrechoId: '',
  origemId: '',
  destinoId: '',
  dataIda: new Date(),
  dataRetorno: new Date(),
}

const tipoTrechos = [
  { id: 'iv', title: 'Ida e Volta' },
  { id: 'si', title: 'Somente Ida' },
]

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  resultContent: {    
    padding: theme.spacing(1)
  }
}))

export const BarraPesquisaTrecho = () => {

  const classes = useStyles();
  const [trechos, setTrechos] = useState([]);
  const [origens, setOrigens] = useState([]);
  const [destinos, setDestinos] = useState([]);
  const [corridas, setCorridas] = useState([]);

  const [origem, setOrigem] = useState([]);
  const [destino, setDestino] = useState([]);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('tipoTrecho' in fieldValues)
        temp.trecho = fieldValues.trecho ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })
  
    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
  }

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = RJControls.useRJForm(initialFormValues, true, validate);

  useEffect(() => {
    service.pesquisarLocalidades()
    .then((resp) => {
      setTrechos(resp.data);
      setOrigens(resp.data.map(preencherLocalidadeByTrechoCallback));
    }).catch((error) => {
      console.log('Ocorreu um erro ao buscar os localidades');
      console.log(error);
    });
  }, [])

  function preencherLocalidadeByTrechoCallback(value) {
    return {"id":value.origem.id, "title":value.origem.cidade};
  }

  function preencherLocalidadeCallback(value) {
    return {"id":value.id, "title":value.cidade};
  }

  function filtrarLocalidadeCallback(trecho) {
    return trecho.origem.id === values.origemId;
  }

  function filtrarDestinoCallback(trecho) {
    return trecho.id === values.destinoId;
  }

  function extrairDestinos() {
    let listDestinos = trechos.filter(filtrarLocalidadeCallback);
    if(listDestinos[0]){
      //console.log(listDestinos[0]);
      setOrigem(listDestinos[0].origem)
      listDestinos = listDestinos[0].destinos.map(preencherLocalidadeCallback);
      setDestinos(listDestinos);
    }
  }

  const handleInputChangeOrigem = e => {
    const { value } = e.target
    values.origemId = value    
    extrairDestinos()
  }

  
  const handleInputChangeDestino = e => {
    const { value } = e.target
    values.destinoId = value
    const destinoFiltrado = destinos.filter(filtrarDestinoCallback);
    if(destinoFiltrado[0]){
      setDestino(destinoFiltrado[0].title)
    }
  }

  const onClickPesquisar = e => {
    e.preventDefault();
    const reqApiBody = {
      data : values.dataIda,
      destino: values.destinoId,
      origem: values.origemId,
      volta: values.tipoTrecho === 'iv'
    }

    serviceCorridas.pesquisarCorridas(reqApiBody)
    .then(data => {
        //console.log(data.data.lsServicos);
        setCorridas(data.data.lsServicos)
    })
    .catch(err => {
      console.log(err);
    });

  }

  return (
    <Paper className={classes.pageContent}>
      <RJControls.RJForm>
            <Grid container>
              <Grid item xs={12}>
                  <RJControls.RJSelect
                    name="tipoTrechoId"
                    label="Trecho"
                    value={values.tipoTrechoId}
                    onChange={handleInputChange}
                    options={tipoTrechos}
                    error={errors.tipoTrecho}
                  />

                  <RJControls.RJSelect
                    name="origemId"
                    label="Saindo de"
                    value={values.origemId}
                    onChange={handleInputChangeOrigem}
                    options={origens}
                    error={errors.trecho}
                  />

                  <RJControls.RJSelect
                    name="destinoId"
                    label="Chegando em"
                    value={values.destinoId}
                    onChange={handleInputChangeDestino}
                    options={destinos}
                    error={errors.trecho}
                  />

                  <RJControls.RJDatePicker
                    name="dataIda"
                    label="Data de ida"
                    value={values.dataIda}
                    onChange={handleInputChange}
                  />

                  <RJControls.RJDatePicker
                    name="dataRetorno"
                    label="Data de volta"
                    value={values.dataRetorno}
                    onChange={handleInputChange}
                  />

                  <RJControls.RJButton
                    text="Buscar"
                    size="small"
                    type="submit"
                    onClick={onClickPesquisar}
                  />


              </Grid>
            </Grid>
            <Grid container >
          {
            corridas.map(
              item => (<Grid item xs={12} className={classes.resultContent}> <RJControls.RJCard 
                empresa={item.empresa}
                horaIda={item.saida.substring(11,16)}
                horaVolta={item.chegada.substring(11,16)}
                origem={origem.cidade}
                destino={destino}
                classe={item.classe}
                poltronasLivres={item.poltronasLivres}
                poltronasTotal={item.poltronasTotal}
                distancia={item.km}
                preco={ item.preco.toLocaleString('pt-br', {minimumFractionDigits: 2})}
                key={item.id}
                /> </Grid>)
              )
          }
          </Grid>


      </RJControls.RJForm>
    </Paper>
  )
}
