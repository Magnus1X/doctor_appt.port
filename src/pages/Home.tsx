import { Link } from 'react-router-dom';
import { Calendar, UserPlus, Search, CheckCircle } from 'lucide-react';
import { categories } from '../data/categories';
import CategoryCard from '../components/doctors/CategoryCard';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-xl text-teal-100">
                Book appointments with the best doctors in your city. Quick, easy, and hassle-free.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/doctors">
                  <Button variant="secondary" size="lg" icon={<Search size={18} />}>
                    Find Doctors
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20" icon={<UserPlus size={18} />}>
                    Join Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">Book your appointment in 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Find a Doctor</h3>
              <p className="text-gray-600">
                Search for specialists by category, location, or availability to find the perfect match.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Book Appointment</h3>
              <p className="text-gray-600">
                Select a convenient date and time from the doctor's available slots and confirm your booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Get Care</h3>
              <p className="text-gray-600">
                Visit the doctor at the scheduled time and receive the care and treatment you need.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Specialties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Medical Specialties</h2>
            <p className="mt-4 text-xl text-gray-600">Explore doctors by their specialties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
                icon={category.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">What Our Patients Say</h2>
            <p className="mt-4 text-xl text-gray-600">Trusted by thousands of patients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-lg">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Yogu Boy</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "The booking process was incredibly easy. I found a great cardiologist and got an appointment on the same day. Highly recommended!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-lg">SW</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Dhiraj Pandu</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "As a busy professional, I appreciate how DocBook helps me manage my appointments. The reminders are a lifesaver!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-lg">RP</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-800">Arnav Kalia</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I found a wonderful dermatologist through this platform. The detailed profiles helped me choose the right doctor for my condition."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-teal-500 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to prioritize your health?</h2>
          <p className="text-xl mb-8">
            Join thousands of patients who've simplified their healthcare journey with DocBook.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup">
              <Button variant="secondary" size="lg">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/doctors">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                Find Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;