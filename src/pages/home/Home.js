import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { createYupSchema } from '../../utils/yupSchemaCreator';
import DynamicInput from '../../components/DynamicInput';
import PreviewModal from '../../components/PreviewModal';
import { useDynamicFormData } from '../../store/context';
import Button from '@material-ui/core/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { setFormData } from '../../service/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { setIsPreviewMode, initialValues, formData } = useDynamicFormData();

  const handleSubmission = (val) => {
    setFormData(JSON.stringify(val, null, 4));
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
              <PreviewModal formData={formData} initialValues={formikProps.values} />
            </>
          )}
        </Formik>

        <Button
          onClick={() => {
            setIsPreviewMode(true);
          }}
          variant='contained'
          color='primary'
          component='span'
          className='preview-btn'
          startIcon={<RemoveRedEyeIcon />}>
          Preview Mode
        </Button>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default Home;
