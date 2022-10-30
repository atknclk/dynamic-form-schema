import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Field } from 'formik';

/**
 * Checkbox Field
 * @param {string} label - label of input
 * @param {object} options - options of input
 * @param {string} type - type of input
 * @param {string} name - name of input
 * @param {boolean} readOnly - read only mode of input
 * @param {boolean} error - error of input
 * @param {object} touched - touched of input
 * @return {ReactNode} - Returns the component created with the incoming parameters.
 **/
const CheckboxField = ({ label, options, type, name, readOnly, error, touched }) => {
  return (
    <div className='field-container'>
      <FormLabel component='legend'>{label}</FormLabel>
      {options.map((opt, index) => {
        return (
          <FormControlLabel
            className='checkbox-container'
            key={index}
            control={
              <Field
                type={type}
                name={name}
                value={opt}
                disabled={readOnly}
                className='checkbox-input'
              />
            }
            label={opt}
          />
        );
      })}
      {error && touched[name] && <div className='error'>{error}</div>}
    </div>
  );
};

export default CheckboxField;
