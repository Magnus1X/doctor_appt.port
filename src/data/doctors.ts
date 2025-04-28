import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    qualification: 'MD, MBBS',
    experience: 8,
    specialty: 'General Health',
    category: 'Physician',
    location: 'Downtown Medical Center',
    fee: 100,
    bio: 'Dr. Sarah Johnson is a dedicated physician with 8 years of experience in general medicine. She specializes in preventive care and managing chronic conditions.',
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '02:00 PM'],
      evening: ['05:00 PM', '06:00 PM', '07:00 PM']
    }
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    qualification: 'MD, FACOG',
    experience: 12,
    specialty: "Women\'s Health",
    category: 'Gynecologist',
    location: 'Wellness Women\'s Clinic',
    fee: 150,
    bio: 'Dr. Michael Chen is a board-certified gynecologist specializing in women\'s reproductive health, family planning, and gynecological surgeries.',
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:30 AM', '10:30 AM'],
      afternoon: ['12:30 PM', '01:30 PM', '02:30 PM'],
      evening: ['04:30 PM', '05:30 PM']
    }
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    qualification: 'DDS, PhD',
    experience: 6,
    specialty: 'Oral Health',
    category: 'Dentist',
    location: 'Bright Smile Dental Care',
    fee: 120,
    bio: 'Dr. Emily Rodriguez is a skilled dentist specializing in cosmetic dentistry, root canals, and dental implants with a focus on painless procedures.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '4',
    name: 'Dr. Robert Williams',
    qualification: 'MD, FACC',
    experience: 15,
    specialty: 'Heart Specialist',
    category: 'Cardiologist',
    location: 'Heart & Vascular Institute',
    fee: 200,
    bio: 'Dr. Robert Williams is a leading cardiologist with extensive experience in treating heart diseases, performing angioplasties, and heart failure management.',
    image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:30 AM', '09:30 AM', '10:30 AM'],
      afternoon: ['12:30 PM', '01:30 PM'],
      evening: ['05:30 PM', '06:30 PM']
    }
  },
  {
    id: '5',
    name: 'Dr. Lisa Patel',
    qualification: 'MD, FAAD',
    experience: 10,
    specialty: 'Skin Specialist',
    category: 'Dermatologist',
    location: 'Clear Skin Dermatology',
    fee: 180,
    bio: 'Dr. Lisa Patel is a board-certified dermatologist specializing in treating acne, eczema, psoriasis, and performing cosmetic dermatology procedures.',
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '10:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '02:00 PM', '03:00 PM'],
      evening: ['05:00 PM']
    }
  },
  {
    id: '6',
    name: 'Dr. James Wilson',
    qualification: 'MD, PhD',
    experience: 14,
    specialty: 'Brain & Nerves Specialist',
    category: 'Neurologist',
    location: 'Neuro Sciences Center',
    fee: 250,
    bio: 'Dr. James Wilson is a renowned neurologist specializing in treating epilepsy, stroke recovery, migraines, and neurodegenerative disorders.',
    image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:00 AM', '09:00 AM'],
      afternoon: ['12:00 PM', '02:00 PM', '03:00 PM'],
      evening: ['05:00 PM', '06:00 PM']
    }
  },
  {
    id: '7',
    name: 'Dr. Amanda Thompson',
    qualification: 'MD, FACP',
    experience: 11,
    specialty: 'General Health',
    category: 'Physician',
    location: 'City General Hospital',
    fee: 120,
    bio: 'Dr. Amanda Thompson is an experienced physician focusing on preventive medicine and chronic disease management with a holistic approach to patient care.',
    image: 'https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:30 AM', '09:30 AM', '10:30 AM'],
      afternoon: ['01:30 PM', '02:30 PM'],
      evening: ['04:30 PM', '05:30 PM']
    }
  },
  {
    id: '8',
    name: 'Dr. Sofia Martinez',
    qualification: 'MD, FACOG',
    experience: 9,
    specialty: "Women\'s Health",
    category: 'Gynecologist',
    location: 'Women\'s Wellness Center',
    fee: 160,
    bio: 'Dr. Sofia Martinez specializes in comprehensive women\'s healthcare, including prenatal care, fertility treatments, and gynecological surgeries.',
    image: 'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '10:00 AM'],
      afternoon: ['12:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '9',
    name: 'Dr. David Kim',
    qualification: 'DDS, MS',
    experience: 8,
    specialty: 'Oral Health',
    category: 'Dentist',
    location: 'Advanced Dental Care',
    fee: 130,
    bio: 'Dr. David Kim specializes in cosmetic dentistry and orthodontics, providing comprehensive dental care with a focus on patient comfort.',
    image: 'https://images.pexels.com/photos/5215033/pexels-photo-5215033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:00 AM', '09:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '03:00 PM'],
      evening: ['05:00 PM', '06:00 PM']
    }
  },
  {
    id: '10',
    name: 'Dr. Rachel Green',
    qualification: 'MD, FACC',
    experience: 13,
    specialty: 'Heart Specialist',
    category: 'Cardiologist',
    location: 'Cardiac Care Center',
    fee: 220,
    bio: 'Dr. Rachel Green is a highly skilled cardiologist specializing in interventional cardiology and preventive cardiac care.',
    image: 'https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:30 AM', '10:30 AM'],
      afternoon: ['01:30 PM', '02:30 PM'],
      evening: ['05:30 PM']
    }
  },
  {
    id: '11',
    name: 'Dr. Thomas Anderson',
    qualification: 'MD, FAAD',
    experience: 11,
    specialty: 'Skin Specialist',
    category: 'Dermatologist',
    location: 'Skin & Beauty Clinic',
    fee: 190,
    bio: 'Dr. Thomas Anderson is an expert in medical and cosmetic dermatology, specializing in skin cancer detection and treatment.',
    image: 'https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:30 AM', '10:30 AM'],
      afternoon: ['12:30 PM', '02:30 PM'],
      evening: ['04:30 PM', '05:30 PM']
    }
  },
  {
    id: '12',
    name: 'Dr. Maria Santos',
    qualification: 'MD, PhD',
    experience: 15,
    specialty: 'Brain & Nerves Specialist',
    category: 'Neurologist',
    location: 'Brain & Spine Center',
    fee: 240,
    bio: 'Dr. Maria Santos is a leading neurologist specializing in neuromuscular disorders and innovative treatment approaches.',
    image: 'https://images.pexels.com/photos/5214996/pexels-photo-5214996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '03:00 PM'],
      evening: ['05:00 PM']
    }
  },
  {
    id: '13',
    name: 'Dr. John Parker',
    qualification: 'MD, MPH',
    experience: 7,
    specialty: 'General Health',
    category: 'Physician',
    location: 'Family Medical Center',
    fee: 110,
    bio: 'Dr. John Parker focuses on family medicine and preventive care, providing comprehensive healthcare for patients of all ages.',
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:00 AM', '09:00 AM', '10:00 AM'],
      afternoon: ['02:00 PM', '03:00 PM'],
      evening: ['05:00 PM', '06:00 PM']
    }
  },
  {
    id: '14',
    name: 'Dr. Jennifer Lee',
    qualification: 'MD, FACOG',
    experience: 10,
    specialty: "Women\'s Health",
    category: 'Gynecologist',
    location: 'Modern Women\'s Care',
    fee: 170,
    bio: 'Dr. Jennifer Lee specializes in high-risk pregnancies and minimally invasive gynecological procedures.',
    image: 'https://images.pexels.com/photos/5214953/pexels-photo-5214953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:30 AM', '10:30 AM'],
      afternoon: ['01:30 PM', '02:30 PM'],
      evening: ['04:30 PM', '05:30 PM']
    }
  },
  {
    id: '15',
    name: 'Dr. Michael Scott',
    qualification: 'DDS, FAGD',
    experience: 9,
    specialty: 'Oral Health',
    category: 'Dentist',
    location: 'Smile Design Studio',
    fee: 140,
    bio: 'Dr. Michael Scott specializes in aesthetic dentistry and full mouth rehabilitation with a focus on digital dentistry.',
    image: 'https://images.pexels.com/photos/5452290/pexels-photo-5452290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:30 AM', '09:30 AM', '10:30 AM'],
      afternoon: ['01:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '16',
    name: 'Dr. Sarah Chen',
    qualification: 'MD, FACC',
    experience: 12,
    specialty: 'Heart Specialist',
    category: 'Cardiologist',
    location: 'Heart Health Institute',
    fee: 210,
    bio: 'Dr. Sarah Chen specializes in non-invasive cardiology and cardiac imaging, with expertise in women\'s heart health.',
    image: 'https://images.pexels.com/photos/5214976/pexels-photo-5214976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '10:00 AM'],
      afternoon: ['12:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '17',
    name: 'Dr. Emma White',
    qualification: 'MD, FAAD',
    experience: 8,
    specialty: 'Skin Specialist',
    category: 'Dermatologist',
    location: 'Advanced Skin Care',
    fee: 175,
    bio: 'Dr. Emma White specializes in pediatric dermatology and advanced laser treatments for various skin conditions.',
    image: 'https://images.pexels.com/photos/5214987/pexels-photo-5214987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:00 AM', '09:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '03:00 PM'],
      evening: ['05:00 PM']
    }
  },
  {
    id: '18',
    name: 'Dr. Daniel Brown',
    qualification: 'MD, PhD',
    experience: 13,
    specialty: 'Brain & Nerves Specialist',
    category: 'Neurologist',
    location: 'Neurology Partners',
    fee: 230,
    bio: 'Dr. Daniel Brown specializes in movement disorders and neurological rehabilitation with a focus on innovative therapies.',
    image: 'https://images.pexels.com/photos/5452289/pexels-photo-5452289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:30 AM', '10:30 AM'],
      afternoon: ['01:30 PM', '02:30 PM'],
      evening: ['04:30 PM', '05:30 PM']
    }
  },
  {
    id: '19',
    name: 'Dr. Laura Martinez',
    qualification: 'MD, FACP',
    experience: 9,
    specialty: 'General Health',
    category: 'Physician',
    location: 'Wellness Medical Group',
    fee: 115,
    bio: 'Dr. Laura Martinez specializes in internal medicine with a focus on preventive care and lifestyle medicine.',
    image: 'https://images.pexels.com/photos/5214979/pexels-photo-5214979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:30 AM', '09:30 AM', '10:30 AM'],
      afternoon: ['01:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '20',
    name: 'Dr. Rebecca Taylor',
    qualification: 'MD, FACOG',
    experience: 11,
    specialty: "Women\'s Health",
    category: 'Gynecologist',
    location: 'Women\'s Health Associates',
    fee: 165,
    bio: 'Dr. Rebecca Taylor specializes in reproductive endocrinology and infertility treatments.',
    image: 'https://images.pexels.com/photos/5214947/pexels-photo-5214947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '10:00 AM'],
      afternoon: ['12:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '21',
    name: 'Dr. William Turner',
    qualification: 'DDS, MS',
    experience: 10,
    specialty: 'Oral Health',
    category: 'Dentist',
    location: 'Premier Dental Solutions',
    fee: 135,
    bio: 'Dr. William Turner specializes in periodontics and dental implants with expertise in gum disease treatment.',
    image: 'https://images.pexels.com/photos/5452196/pexels-photo-5452196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:00 AM', '09:00 AM', '11:00 AM'],
      afternoon: ['01:00 PM', '03:00 PM'],
      evening: ['05:00 PM']
    }
  },
  {
    id: '22',
    name: 'Dr. Christopher Lee',
    qualification: 'MD, FACC',
    experience: 14,
    specialty: 'Heart Specialist',
    category: 'Cardiologist',
    location: 'Cardiovascular Specialists',
    fee: 225,
    bio: 'Dr. Christopher Lee is an expert in electrophysiology and cardiac rhythm management.',
    image: 'https://images.pexels.com/photos/5452198/pexels-photo-5452198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:30 AM', '10:30 AM'],
      afternoon: ['01:30 PM', '02:30 PM'],
      evening: ['04:30 PM', '05:30 PM']
    }
  },
  {
    id: '23',
    name: 'Dr. Jessica Wong',
    qualification: 'MD, FAAD',
    experience: 9,
    specialty: 'Skin Specialist',
    category: 'Dermatologist',
    location: 'Dermatology & Aesthetics',
    fee: 185,
    bio: 'Dr. Jessica Wong specializes in cosmetic dermatology and advanced skin cancer treatments.',
    image: 'https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['08:30 AM', '09:30 AM', '10:30 AM'],
      afternoon: ['01:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  },
  {
    id: '24',
    name: 'Dr. Andrew Miller',
    qualification: 'MD, PhD',
    experience: 12,
    specialty: 'Brain & Nerves Specialist',
    category: 'Neurologist',
    location: 'Advanced Neurology Center',
    fee: 245,
    bio: 'Dr. Andrew Miller specializes in neuro-oncology and advanced treatment of brain tumors.',
    image: 'https://images.pexels.com/photos/5452197/pexels-photo-5452197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    availableSlots: {
      morning: ['09:00 AM', '10:00 AM'],
      afternoon: ['12:00 PM', '02:00 PM'],
      evening: ['04:00 PM', '05:00 PM']
    }
  }
];