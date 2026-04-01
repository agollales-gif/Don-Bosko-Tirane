import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-100"
      aria-label="Ktheu mbrapa"
    >
      <ArrowLeft size={20} />
      <span className="font-medium">MBRAPA</span>
    </button>
  );
};

export default BackButton;
