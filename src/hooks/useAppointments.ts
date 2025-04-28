import { useContext } from 'react';
import { AppointmentContext } from '../context/AppointmentContext';

export const useAppointments = () => {
  return useContext(AppointmentContext);
};