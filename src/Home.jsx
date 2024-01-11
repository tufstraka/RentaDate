import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  const [companions, setCompanions] = useState([]);

  useEffect(() => {
    const fetchCompanionImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/featured/?people');
        const imageSrc = response.request.responseURL;
        setCompanions((prevCompanions) => [...prevCompanions, { id: Date.now(), imageSrc }]);
      } catch (error) {
        console.error('Error fetching companion image:', error);
      }
    };

    fetchCompanionImages();
    fetchCompanionImages();
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 min-h-screen flex flex-col items-center justify-center font-poppins">
      {/* Header */}
      <div className="text-white text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Discover Your Perfect Valentine</h1>
        <p className="text-lg">Find someone special to make your day unforgettable!</p>
        <Link to="/register">
          <button className="bg-white text-pink-500 hover:bg-pink-400 py-2 px-6 rounded-full font-bold">
            Get Started
          </button>
        </Link>
      </div>

      {/* Featured Companions Section */}
      <div className="flex justify-center flex-wrap mb-12">
        {companions.map((companion) => (
          <div
            key={companion.id}
            className="bg-white p-6 rounded-lg m-4 shadow-md max-w-xs transform hover:scale-105 transition-transform"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src={companion.imageSrc}
              alt={`Companion ${companion.id}`}
            />
            {/*<h3 className="text-lg font-bold mb-2">Companion {companion.id}</h3>*/}
            <p className="text-gray-600 mb-4">
              Fun-loving adventurer with a passion for creating memorable moments.
            </p>
            <div className="flex justify-center space-x-4">
              <FontAwesomeIcon icon={faHeart} className="text-pink-500" />
              <FontAwesomeIcon icon={faShieldAlt} className="text-blue-500" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <div className="flex justify-center flex-wrap">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg m-4 shadow-md max-w-md">
            <h3 className="text-lg font-bold mb-2">Diverse Companions</h3>
            <p className="text-gray-600">
              Choose from a variety of companions with different interests and playful personalities.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg m-4 shadow-md max-w-md">
            <h3 className="text-lg font-bold mb-2">Safe and Secure</h3>
            <p className="text-gray-600">
              Our platform ensures a secure and playful experience for everyone involved.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg m-4 shadow-md max-w-md">
            <h3 className="text-lg font-bold mb-2">Unforgettable Moments</h3>
            <p className="text-gray-600">
              Create memories that last a lifetime with our carefully selected and playful companions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;