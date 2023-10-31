import React from "react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="grid place-items-center min-h-[calc(100vh-4rem)] xl:min-h-screen p-5">
      <div className="w-full lg:w-px">
        <div className="flex flex-col lg:flex-row">
          <h1 className="m-4 inline-block text-2xl font-bold font-press-start">
            Contacto
          </h1>
        </div>

        <div className="m-4">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
