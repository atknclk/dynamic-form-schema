import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';

/**
 * Select Field
 * @param {string} label - label of input
 * @param {object} options - options of input,
 * @param {string} value - value of input
 * @param {function} onChange - on change function of input
 * @param {string} name - name of input
 * @param {boolean} readOnly - read only mode of input
 * @param {boolean} error - error of input
 * @param {object} touched - touched of input
 * @return {ReactNode} - Returns the component created with the incoming parameters.
 **/
const SelectField = ({ label, options, value, onChange, name, readOnly, error, touched }) => {
  return (
    <div className='field-container'>
      <FormLabel className='label' component='legend'>
        {label}
      </FormLabel>
      <FormControl variant='outlined'>
        <Select name={name} value={value} onChange={onChange} disabled={readOnly} displayEmpty>
          <MenuItem value=''>
            <span>{label}</span>
          </MenuItem>
          {options.map((opt, index) => {
            return (
              <MenuItem key={index} value={opt}>
                {opt}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {error && touched[name] && <div className='error'>{error}</div>}
    </div>
  );
};

export default SelectField;
