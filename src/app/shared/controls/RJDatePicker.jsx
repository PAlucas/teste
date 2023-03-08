import React from 'react'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns' 
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  theme => ({
    formControl: {
      minWidth: 180,
      margin: theme.spacing(1)
    }
  })
)

const convertParams = (name, value) => ({
  target: {
    name,value
  }
})

export const RJDatePicker = (props) => {

    const { name, label, value, onChange } = props;

    const classes = useStyles();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          className={classes.formControl}
          label={label}
          name={name}
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={ date => onChange(convertParams(name,date))}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    )
}
