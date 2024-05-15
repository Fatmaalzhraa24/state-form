import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './FormContext';
import Form from './Form';
import Confirmation from './Confirmation';

const App = () => {
  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </FormProvider>
  );
};

export default App;