import React, { useState, useEffect } from 'react';
import Seo from '../components/Seo';

import { FiInstagram, FiMail } from 'react-icons/fi';
import avatar_1 from '/assets/avatar_1.jpeg';
import avatar_2 from '/assets/avatar_2.jpeg';
import avatar_3 from '/assets/avatar_3.jpeg';
import avatar_4 from '/assets/avatar_4.jpeg';
import userDetails from '../data/userDetails';

const HomePage = () => {
  const images = [avatar_1, avatar_2, avatar_3, avatar_4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => {
        if (currentImageIndex === images.length - 1) {
          return 0;
        }
        return currentImageIndex + 1;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Seo title="AMG | Inicio" />

      <div className="grid place-items-center h-full p-5">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-7 lg:space-y-0 lg:space-x-14">
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-md relative">
            {images.map((image, index) => (
              <img
                key={index}
                className="w-full h-full rounded shadow"
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  transition: 'opacity 2s ease-in-out', // add this line for a 2-second transition duration
                }}
              />
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-4">
            <div>
              <h1 className="text-center text-5xl md:text-6xl md:text-left font-bold">
                {userDetails.full_name}
              </h1>
            </div>
            <p className="text-gray-500 italic max-w-xl max-w-2xl p-2 lg:p-0">
              {userDetails.brief}
            </p>
            <div>
              <span className="inline-flex justify-center space-x-2 sm:ml-auto sm:mt-0 sm:justify-start">
                <a href={userDetails.email} className="hover:text-gray-500">
                  <span className="sr-only">Email</span>
                  <FiMail className="w-7 h-7" />
                </a>

                <a
                  href={userDetails.instagram}
                  target="_blank"
                  className="hover:text-gray-500"
                >
                  <span className="sr-only">Instagram</span>
                  <FiInstagram className="w-7 h-7" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
