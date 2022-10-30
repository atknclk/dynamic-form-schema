import * as yup from 'yup';

/**
 * Create Yup Schema
 * @param {object} schema - schema of input
 * @param {object} config - config of input
 * @return {boolean} - returns validation status
 **/
export const createYupSchema = (schema, config) => {
  const { id, validationType, validations = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  validations.forEach((validation) => {
    const { params, type } = validation;
    if (!validator[type] || !params) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[id] = validator;
  return schema;
};
