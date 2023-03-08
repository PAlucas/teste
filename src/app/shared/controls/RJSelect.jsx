import React from 'react'

import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
    theme => ({
      formControl: {
        minWidth: 180,
        margin: theme.spacing(1)
      }
    })
  )

export const RJSelect = (props) => {

    const { name, label, value, error=null, onChange, options } = props;

    const classes = useStyles();

    return (
        <FormControl variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                className={classes.formControl}
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                {
                    options.map(
                        item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
