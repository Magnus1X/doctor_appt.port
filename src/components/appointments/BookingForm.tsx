import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../../types';
import Button from '../common/Button';
import { useAppointments } from '../../hooks/useAppointments';
import { useAuth } from '../../hooks/useAuth';
import { Calendar, Clock } from 'lucide-react';

interface BookingFormProps {
  doctor: Doctor;
}

const BookingForm = ({ doctor }: BookingFormProps) => {
  const navigate = useNavigate();
  const { bookAppointment } = useAppointments();
  const { isAuthenticated } = useAuth();
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [timeCategory, setTimeCategory] = useState<'morning' | 'afternoon' | 'evening'>('morning');
  
  // Generate available dates (next 7 days)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    
    return dates;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      // Redirect to login page if not authenticated
      navigate('/login', { 
        state: { 
          redirectTo: `/doctors/${doctor.id}`,
          message: 'Please log in to book an appointment' 
        } 
      });
      return;
    }
    
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time for your appointment');
      return;
    }
    
    // Book the appointment
    bookAppointment(doctor.id, selectedDate, selectedTime);
    
    // Navigate to dashboard
    navigate('/dashboard', { 
      state: { successMessage: 'Appointment booked successfully!' } 
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Book an Appointment</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2 flex items-center">
            <Calendar size={18} className="mr-2" />
            Select Date
          </label>
          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          >
            <option value="">Select a date</option>
            {getAvailableDates().map((date) => (
              <option key={date} value={date}>
                {new Date(date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2 flex items-center">
            <Clock size={18} className="mr-2" />
            Select Time
          </label>
          
          <div className="grid grid-cols-3 gap-2 mb-3">
            <button
              type="button"
              className={`py-2 px-3 text-sm text-center rounded-md transition ${
                timeCategory === 'morning' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                setTimeCategory('morning');
                setSelectedTime('');
              }}
            >
              Morning
            </button>
            <button
              type="button"
              className={`py-2 px-3 text-sm text-center rounded-md transition ${
                timeCategory === 'afternoon' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                setTimeCategory('afternoon');
                setSelectedTime('');
              }}
            >
              Afternoon
            </button>
            <button
              type="button"
              className={`py-2 px-3 text-sm text-center rounded-md transition ${
                timeCategory === 'evening' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                setTimeCategory('evening');
                setSelectedTime('');
              }}
            >
              Evening
            </button>
          </div>
          
          {doctor.availableSlots[timeCategory].length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {doctor.availableSlots[timeCategory].map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`py-2 px-3 text-sm text-center border rounded-md transition ${
                    selectedTime === time 
                      ? 'bg-teal-50 border-teal-500 text-teal-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 text-center py-4">
              No available slots for this time period
            </p>
          )}
        </div>
        
        <div className="mt-6">
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={!selectedDate || !selectedTime}
          >
            Book Appointment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;