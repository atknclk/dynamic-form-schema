import React from 'react';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

/**
 * Upload Field
 * @param {string} label - label of input
 * @param {string} type - type of input
 * @param {string} value - value of input
 * @param {function} onChange - on change function of input
 * @param {string} name - name of input
 * @param {boolean} readOnly - read only mode of input
 * @param {boolean} error - error of input
 * @param {object} touched - touched of input
 * @return {ReactNode} - Returns the component created with the incoming parameters.
 **/
const UploadField = ({ label, type, value, onChange, name, readOnly, error, touched }) => {
  return (
    <div className='field-container'>
      <FormLabel component='legend'>{label}</FormLabel>
      <input
        accept='image/*'
        className='file-input'
        id={name}
        type={type}
        onChange={onChange}
        disabled={readOnly}
      />
      <label className='upload-container' htmlFor={readOnly ? '' : name}>
        <Button disabled={readOnly} variant='contained' color='primary' component='span'>
          Upload
        </Button>
        <span className='file-path'>{value}</span>
      </label>
      {error && touched[name] && <div className='error'>{error}</div>}
    </div>
  );
};

export default UploadField;
