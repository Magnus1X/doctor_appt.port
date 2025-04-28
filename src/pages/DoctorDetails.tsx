import { useParams, Link } from 'react-router-dom';
import { doctors } from '../data/doctors';
import BookingForm from '../components/appointments/BookingForm';
import Button from '../components/common/Button';
import { MapPin, DollarSign, Award, ArrowLeft, Clock, Calendar } from 'lucide-react';

const DoctorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find((doc) => doc.id === id);
  
  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Doctor not found</h2>
          <p className="mt-2 text-gray-600">The doctor you're looking for does not exist.</p>
          <Link to="/doctors" className="mt-4 inline-block text-teal-500 hover:text-teal-700">
            Go back to doctors
          </Link>
        </div>
      </div>
    );
  }
  
  const totalAvailableSlots = Object.values(doctor.availableSlots).flat().length;
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/doctors" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to doctors
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Doctor Info */}
            <div className="md:w-2/3 p-6 md:p-8">
              <div className="md:flex items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h1>
                  
                  <div className="flex items-center mb-2 text-gray-600">
                    <span className="font-medium">{doctor.qualification}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <Award size={16} className="mr-1" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                  </div>
                  
                  <div className="text-teal-600 font-medium mb-3">
                    {doctor.specialty} ({doctor.category})
                  </div>
                  
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700 mb-4">
                    <DollarSign size={16} className="mr-1" />
                    <span className="font-medium">${doctor.fee}</span>
                    <span className="text-gray-500 text-sm ml-1">per consultation</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>Available Today</span>
                    </div>
                    <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{totalAvailableSlots} slots available</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* About */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed">
                  {doctor.bio}
                </p>
              </div>
              
              {/* Available Slots */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Availability</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Morning</h3>
                    {doctor.availableSlots.morning.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableSlots.morning.map((time) => (
                          <span 
                            key={time} 
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">No morning slots available</p>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Afternoon</h3>
                    {doctor.availableSlots.afternoon.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableSlots.afternoon.map((time) => (
                          <span 
                            key={time} 
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">No afternoon slots available</p>
                    )}
                  </div>
                  
                  <div className="border border-gray-200 rounded-md p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Evening</h3>
                    {doctor.availableSlots.evening.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {doctor.availableSlots.evening.map((time) => (
                          <span 
                            key={time} 
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">No evening slots available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Booking Form */}
            <div className="md:w-1/3 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200">
              <BookingForm doctor={doctor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;