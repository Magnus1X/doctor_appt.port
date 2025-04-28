import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Appointment, AppointmentContextType } from '../types';
import { AuthContext } from './AuthContext';

// Create the context with a default value
export const AppointmentContext = createContext<AppointmentContextType>({
  appointments: [],
  bookAppointment: () => {},
  cancelAppointment: () => {},
});

interface AppointmentProviderProps {
  children: ReactNode;
}

export const AppointmentProvider = ({ children }: AppointmentProviderProps) => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Load appointments from localStorage on initial load
  useEffect(() => {
    if (user) {
      const storedAppointments = localStorage.getItem(`appointments_${user.id}`);
      if (storedAppointments) {
        setAppointments(JSON.parse(storedAppointments));
      }
    }
  }, [user]);

  // Save appointments to localStorage when they change
  useEffect(() => {
    if (user) {
      localStorage.setItem(`appointments_${user.id}`, JSON.stringify(appointments));
    }
  }, [appointments, user]);

  // Book a new appointment
  const bookAppointment = (doctorId: string, date: string, time: string) => {
    if (!user) return;

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      doctorId,
      userId: user.id,
      date,
      time,
      status: 'upcoming',
    };

    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
  };

  // Cancel an appointment
  const cancelAppointment = (appointmentId: string) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'cancelled' }
          : appointment
      )
    );
  };

  return (
    <AppointmentContext.Provider value={{ appointments, bookAppointment, cancelAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};