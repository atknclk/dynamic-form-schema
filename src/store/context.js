import { createContext, useContext } from 'react';

const MainContext = createContext();

const useDynamicFormData = () => useContext(MainContext);

export { MainContext, useDynamicFormData };
