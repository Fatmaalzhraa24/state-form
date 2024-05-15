import React from 'react';
import { useFormContext } from './FormContext';

const Confirmation = () => {
  const { formData } = useFormContext();

  return (
    <div>
      <h1>Confirmation</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p>
    </div>
  );
};

export default Confirmation;