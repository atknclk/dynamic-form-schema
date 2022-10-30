import { MainContext } from '../store/context';
import { formData } from '../constants/formData';

/**
 * Get Initial Values Form Data
 * @param {array} formData - form data
 * @return {object} - Returns Initial Values Form Data.
 **/
const getInitialValuesFormData = (formData) => {
  const values = formData.reduce((acc, item) => {
    acc[item.id] = item.value;
    return acc;
  }, {});
  return values;
};

const Provider = ({ children }) => {
  const initialValues = getInitialValuesFormData(formData);

  const data = {
    initialValues,
    formData,
  };

  return (
    <MainContext.Provider value={data} className='App'>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;
