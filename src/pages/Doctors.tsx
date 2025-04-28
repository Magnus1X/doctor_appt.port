import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../data/doctors';
import { categories } from '../data/categories';
import DoctorCard from '../components/doctors/DoctorCard';
import { Doctor } from '../types';
import { Filter, Search } from 'lucide-react';

const Doctors = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: categoryId || '',
    specialty: '',
    experience: '',
  });
  
  // Filter doctors based on selected filters and search query
  useEffect(() => {
    let result = [...doctors];
    
    // Apply category filter
    if (filters.category) {
      result = result.filter(doctor => 
        doctor.category.toLowerCase() === filters.category.toLowerCase()
      );
    }
    
    // Apply specialty filter
    if (filters.specialty) {
      result = result.filter(doctor => 
        doctor.specialty.toLowerCase() === filters.specialty.toLowerCase()
      );
    }
    
    // Apply experience filter
    if (filters.experience) {
      const minExp = parseInt(filters.experience);
      result = result.filter(doctor => doctor.experience >= minExp);
    }
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(doctor => 
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.location.toLowerCase().includes(query)
      );
    }
    
    setFilteredDoctors(result);
  }, [filters, searchQuery, categoryId]);
  
  // Update category filter when URL param changes
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      category: categoryId || ''
    }));
  }, [categoryId]);
  
  // Get the current category name if a category is selected
  const currentCategory = categoryId 
    ? categories.find(cat => cat.id === categoryId)?.name 
    : null;
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            {currentCategory ? `${currentCategory} Specialists` : 'Find Doctors'}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {currentCategory 
              ? `Book appointments with the best ${currentCategory.toLowerCase()} specialists`
              : 'Discover the right specialist for your health needs'}
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search doctors by name, specialty, or location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-auto">
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="w-full md:w-auto">
                <select
                  value={filters.experience}
                  onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Experience (Any)</option>
                  <option value="5">5+ Years</option>
                  <option value="10">10+ Years</option>
                  <option value="15">15+ Years</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Doctors list */}
        <div className="mt-6">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Filter size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No doctors found</h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;