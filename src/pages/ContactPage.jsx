import React from 'react';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      
      <SEO title="AMG | Contacto" />
      <div className=" min-h-[calc(100vh-4rem-2rem)] xl:min-h-screen grid place-items-center h-full p-5">
        <div className="w-full lg:w-px">
          <div className="flex flex-col lg:flex-row">
            <h1 className="m-4 inline-block text-2xl font-bold font-press-start">
              Contacto
            </h1>
          </div>

          <div className="m-4">
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-black hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
