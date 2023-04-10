import React from 'react';
import SEO from '../components/SEO';

import userDetails from '../data/userDetails';
import about from '/assets/about.jpeg';

const AboutPage = () => {
  return (
    <>
      <SEO title ="AMG | Acerca de mi"/>
      <div className="min-h-[calc(100vh-4rem-2rem)] xl:min-h-screen grid place-items-center p-5">
        <div className="w-full lg:w-8/12 p-5 flex flex-col items-start justify-center space-y-5 lg:space-x-0 ">
          <div>
            <img src={about} className="rounded-md lg:w-full" />
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:w-full">
            <div className="flex flex-col items-start lg:w-full">
              <h1 className="text-2xl font-bold lg:w-full">
                {userDetails.full_name}
              </h1>

              <div className="flex flex-col xl:flex-row lg:w-full">
                <p className="text-gray-500 italic max-w-xl mt-5">
                  {userDetails.biography}
                </p>

                <div className="mt-5 flex-grow">
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-sm font-medium pr-4">Pais:</td>
                        <td className="text-sm text-gray-500">
                          {userDetails.country}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-medium pr-4">
                          Nacimiento:
                        </td>
                        <td className="text-sm text-gray-500">
                          {userDetails.birthday}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-medium pr-4">Email:</td>
                        <td className="text-sm text-gray-500">
                          {userDetails.email}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-sm font-medium pr-4">Telefono:</td>
                        <td className="text-sm text-gray-500">
                          {userDetails.phone}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
