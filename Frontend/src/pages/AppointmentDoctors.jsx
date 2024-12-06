import React from 'react';
import { useLocation } from 'react-router-dom';
import AppointDoctor from '../Components/AppointDoctor/AppointDoctor';

const AppointmentDoctors = () => {
  const location = useLocation();
  const { selectedOption } = location.state || {};

//   console.log(selectedOption); 

  return (
    <>
      <AppointDoctor specialty={selectedOption.label} />
    </>
  );
};

export default AppointmentDoctors;
