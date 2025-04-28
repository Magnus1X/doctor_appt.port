import { useState, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useAppointments } from '../hooks/useAppointments';
import AppointmentCard from '../components/appointments/AppointmentCard';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface LocationState {
  successMessage?: string;
}

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const { appointments } = useAppointments();
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Check for success message in location state
  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.successMessage) {
      setSuccessMessage(state.successMessage);
      // Clear the message after 5 seconds
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [location]);
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ redirectTo: '/dashboard' }} />;
  }
  
  // Filter appointments based on active tab
  const filteredAppointments = appointments.filter(appointment => {
    if (activeTab === 'upcoming') {
      return appointment.status === 'upcoming';
    } else {
      return appointment.status === 'completed' || appointment.status === 'cancelled';
    }
  });
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Appointments</h1>
          <p className="mt-2 text-gray-600">Manage your upcoming and past appointments</p>
        </div>
        
        {successMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-center">
            <CheckCircle size={20} className="mr-2 flex-shrink-0" />
            <p>{successMessage}</p>
          </div>
        )}
        
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'upcoming'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Upcoming Appointments
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'past'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Past Appointments
              </button>
            </nav>
          </div>
        </div>
        
        {filteredAppointments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <AlertTriangle size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'upcoming' ? 'No upcoming appointments' : 'No past appointments'}
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {activeTab === 'upcoming'
                ? 'You don\'t have any upcoming appointments scheduled. Browse our doctors to book an appointment.'
                : 'You don\'t have any past appointment records.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;