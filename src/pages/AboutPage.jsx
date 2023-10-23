import React from "react";

import userDetails from "../data/userDetails";
import about from "/assets/about.jpeg";

const AboutPage = () => {
  return (

      <div className="grid place-items-center min-h-[calc(100vh-4rem)] xl:min-h-screen p-5">
        <div className="w-full max-w-3xl h-full p-5 flex flex-col items-start justify-center space-y-6 lg:space-x-0 ">

          <img src={about} className="rounded-md object-contain w-full md:w-3/4 mx-auto" />

          <div className="flex flex-col items-start lg:w-full">
            <h1 className="text-2xl font-bold lg:w-full">
              {userDetails.full_name}
            </h1>

            <div className="flex flex-col xl:flex-row gap-3 mt-3">
              <p className="text-gray-500 italic">{userDetails.biography}</p>

              {/* <div className="flex-grow">
                <table>
                  <tbody>
                    <tr>
                      <td className="text-sm font-medium pr-4">Pais:</td>
                      <td className="text-sm text-gray-500">
                        {userDetails.country}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium pr-4">Nacimiento:</td>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>

  );
};

export default AboutPage;
