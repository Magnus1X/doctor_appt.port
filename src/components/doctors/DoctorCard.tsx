import { Link } from 'react-router-dom';
import { Doctor } from '../../types';
import { MapPin, DollarSign, Award } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={doctor.image} 
          alt={`Dr. ${doctor.name}`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
        
        <div className="flex items-center mb-2 text-sm text-gray-600">
          <span className="font-medium">{doctor.qualification}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Award size={16} className="mr-1" />
            <span>{doctor.experience} years</span>
          </div>
        </div>
        
        <div className="text-teal-600 font-medium mb-2">
          {doctor.specialty}
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1 flex-shrink-0" />
          <span className="text-sm">{doctor.location}</span>
        </div>
        
        <div className="flex items-center text-gray-700 mb-4">
          <DollarSign size={16} className="mr-1" />
          <span className="font-medium">${doctor.fee}</span>
          <span className="text-gray-500 text-sm ml-1">per consultation</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-gray-500">
            {Object.values(doctor.availableSlots).flat().length} slots available
          </div>
          <Link 
            to={`/doctors/${doctor.id}`} 
            className="inline-flex items-center px-4 py-2 bg-teal-500 text-white text-sm font-medium rounded-md hover:bg-teal-600 transition"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;