import { useState } from 'react';
import { Appointment } from '../../types';
import { Calendar, Clock, User, MapPin } from 'lucide-react';
import Button from '../common/Button';
import { useAppointments } from '../../hooks/useAppointments';
import { doctors } from '../../data/doctors';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard = ({ appointment }: AppointmentCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { cancelAppointment } = useAppointments();
  
  // Find the doctor for this appointment
  const doctor = doctors.find(doc => doc.id === appointment.doctorId);
  
  if (!doctor) return null;
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Get status color
  const getStatusColor = () => {
    switch (appointment.status) {
      case 'upcoming':
        return 'text-blue-500 bg-blue-50';
      case 'completed':
        return 'text-green-500 bg-green-50';
      case 'cancelled':
        return 'text-red-500 bg-red-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };
  
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      cancelAppointment(appointment.id);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Calendar size={16} className="mr-2" />
            <span>{formatDate(appointment.date)}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Clock size={16} className="mr-2" />
            <span>{appointment.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin size={16} className="mr-2" />
            <span>{doctor.location}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-teal-500 hover:text-teal-700 text-sm font-medium"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
          
          {appointment.status === 'upcoming' && (
            <Button 
              variant="danger" 
              size="sm" 
              onClick={handleCancel}
            >
              Cancel
            </Button>
          )}
        </div>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="mb-3">
              <h4 className="font-medium text-gray-700 mb-1">Doctor Information</h4>
              <p className="text-sm text-gray-600">{doctor.qualification} • {doctor.experience} years experience</p>
            </div>
            
            <div className="mb-3">
              <h4 className="font-medium text-gray-700 mb-1">Appointment Fee</h4>
              <p className="text-sm text-gray-600">${doctor.fee}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-1">Notes</h4>
              <p className="text-sm text-gray-600">Please arrive 15 minutes before your appointment time. Bring any relevant medical records.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;