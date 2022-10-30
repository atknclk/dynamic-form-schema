import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

/**
 * Radio Button Field
 * @param {string} label - label of input
 * @param {object} options - options of input
 * @param {string} value - value of input
 * @param {function} onChange - on change function of input
 * @param {string} name - name of input
 * @param {boolean} readOnly - read only mode of input
 * @param {boolean} error - error of input
 * @param {object} touched - touched of input
 * @return {ReactNode} - Returns the component created with the incoming parameters.
 **/
const RadioButtonField = ({ label, options, value, onChange, name, readOnly, error, touched }) => {
  return (
    <div className='field-container'>
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{label}</FormLabel>
        <RadioGroup value={value} onChange={onChange}>
          {options.map((opt) => {
            return (
              <>
                <FormControlLabel
                  value={opt}
                  control={<Radio color='default' size='small' />}
                  label={opt}
                  checked={opt === value}
                  onChange={onChange}
                  name={name}
                  disabled={readOnly}
                />
              </>
            );
          })}
        </RadioGroup>
      </FormControl>

      {error && touched[name] && <div className='error'>{error}</div>}
    </div>
  );
};

export default RadioButtonField;
