import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

/**
 * Input Field
 * @param {string} label - label of input
 * @param {string} value - value of input
 * @param {function} onChange - on change function of input
 * @param {string} type - type of input
 * @param {string} name - name of input
 * @param {boolean} readOnly - read only mode of input
 * @param {boolean} error - error of input
 * @param {object} touched - touched of input
 * @return {ReactNode} - Returns the component created with the incoming parameters.
 **/
const InputField = ({ label, value, onChange, type, name, readOnly, error, touched }) => {
  return (
    <div className='field-container'>
      <FormLabel className='label' component='legend'>
        {label}
      </FormLabel>
      <TextField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={readOnly}
        variant='outlined'
        InputLabelProps={{
          shrink: true,
        }}
        placeholder={label}
      />
      {error && touched[name] && <div className='error'>{error}</div>}
    </div>
  );
};

export default InputField;
