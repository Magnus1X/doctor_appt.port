import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const CategoryCard = ({ id, name, description, icon }: CategoryCardProps) => {
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Activity;

  return (
    <Link
      to={`/doctors/category/${id}`}
      className="bg-white rounded-lg shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center"
    >
      <div className="bg-teal-100 p-4 rounded-full mb-4">
        <IconComponent size={32} className="text-teal-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
};

export default CategoryCard;