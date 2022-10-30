import { toast } from 'react-toastify';

const SET_FORM_DATA_URL = 'http://localhost:9000/setFormData';

/**
 * Set Data
 * @param {string} data - input values
 **/
export const setFormData = async (data) => {
  try {
    await fetch(SET_FORM_DATA_URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: data,
    });
    toast.success('Data is written to json file.');
  } catch (error) {
    toast.error('Cannot write data to json file!');
  }
};
