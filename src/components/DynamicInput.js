/* eslint-disable no-prototype-builtins */
import React from 'react';
import CheckboxField from './CheckboxField';
import InputField from './InputField';
import RadioButtonField from './RadioButtonField';
import SelectField from './SelectField';
import UploadField from './UploadField';

const fieldMap = {
  text: InputField,
  number: InputField,
  date: InputField,
  file: UploadField,
  checkbox: CheckboxField,
  radio: RadioButtonField,
  select: SelectField,
};

/**
 * Dynamic Input Creator
 * @param {object} formData - data object to reference.
 * @param {object} formikProps - formik props of form data.
 * @param {boolean} [readOnly = false] - read only mode of input.
 * @return {ReactNode} - Returns the created dynamic component with the incoming parameters.
 **/
const DynamicInput = ({ formData, formikProps, readOnly = false }) => {
  const { errors, touched, values, handleBlur, handleChange, setFieldValue } = formikProps;
  return formData.map((item, index) => {
    const Component = fieldMap[item.type];
    const error = errors.hasOwnProperty(item.id) && errors[item.id];
    if (!item.type) {
      return null;
    }

    return (
      <Component
        key={index}
        type={item.type}
        label={item.label}
        name={item.id}
        value={values[item.id]}
        options={item.options}
        touched={touched}
        error={error}
        handleBlur={handleBlur}
        onChange={handleChange}
        setFieldValue={setFieldValue}
        readOnly={readOnly}
      />
    );
  });
};

export default DynamicInput;
