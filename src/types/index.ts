export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  experience: number;
  specialty: string;
  category: string;
  location: string;
  fee: number;
  bio: string;
  image: string;
  availableSlots: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  };
}

export interface Appointment {
  id: string;
  doctorId: string;
  userId: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, phone: string) => Promise<void>;
  logout: () => void;
}

export interface AppointmentContextType {
  appointments: Appointment[];
  bookAppointment: (doctorId: string, date: string, time: string) => void;
  cancelAppointment: (appointmentId: string) => void;
}