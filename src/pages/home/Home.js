import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../../utils/yupSchemaCreator';
import DynamicInput from '../../components/DynamicInput';
import { useDynamicFormData } from '../../store/context';
import Button from '@material-ui/core/Button';

const Home = () => {
  const { initialValues, formData } = useDynamicFormData();

  const handleSubmission = (val) => {
    alert(JSON.stringify(val, null, 4));
  };

  const yupSchema = formData.reduce(createYupSchema, {});

  const validateSchema = yup.object().shape(yupSchema);

  return (
    <Fragment>
      <div className='main-container'>
        <h1 className='title'>Dynamic Form Schema</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={handleSubmission}>
          {(formikProps) => (
            <>
              <form className='form-schema' onSubmit={formikProps.handleSubmit}>
                <DynamicInput formData={formData} formikProps={formikProps} />
                <Button variant='contained' color='primary' type='submit'>
                  Submit
                </Button>
              </form>
            </>
          )}
        </Formik>
      </div>
    </Fragment>
  );
};

export default Home;
