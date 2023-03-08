import React from 'react'

import { Autocomplete, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';


export const RJAutocomplete = (props) => {

    const { name, label, value, error=null, onChange, options } = props;

    const defaultProps = {
        options: {options},
        getOptionLabel: (option) => option.label,
      };

    return (
        <Autocomplete
        {...defaultProps}
        id={name}
        autoComplete
        includeInputInList
        value={value}
        onChange={onChange}
        renderInput={({options}) => (
          <TextField {...options} label={label} variant="outlined" />
        )}
      />
    )
}





