import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Formik } from 'formik';
import DynamicInput from './DynamicInput';
import { useDynamicFormData } from '../store/context';

/**
 * Preview Modal
 * @param {object} formData - data object to reference.
 * @param {object} initialValues - initial values of form.
 **/
const PreviewModal = ({ initialValues, formData }) => {
  const { isPreviewMode, setIsPreviewMode } = useDynamicFormData();
  return (
    <div>
      <Modal
        open={isPreviewMode}
        onClose={() => {
          setIsPreviewMode(false);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <div className='modal-container'>
          <h1 className='title'>Read Only Mode</h1>
          <IconButton
            className='close-btn'
            aria-label='close'
            onClick={() => {
              setIsPreviewMode(false);
            }}>
            <CloseIcon />
          </IconButton>
          <Formik initialValues={initialValues}>
            {(formikProps) => (
              <form className='form-schema' onSubmit={formikProps.handleSubmit}>
                <DynamicInput formData={formData} formikProps={formikProps} readOnly={true} />
              </form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default PreviewModal;
