import React, { useContext } from "react";
import ToastContext from "../contexts/ToastContext";

import axios from "axios";

const ContactForm = () => {
  const { showToast } = useContext(ToastContext);

  const handleSubmitMessage = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post(form.action, formData, {
        headers: {
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        showToast("Message sent successfully!", "success");
        // Reset the form if needed
        form.reset();
      } else {
        showToast("Error submitting Message. Please try again.", "error");
      }
    } catch (error) {
      showToast("Error submitting Message. Please try again.", "error");
    }
  };

  return (
    <div>
      <form
        action="https://getform.io/f/b0d67c57-9226-4c38-be8c-76357605bb9c"
        method="POST"
        onSubmit={handleSubmitMessage}
        className="w-full"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              htmlFor="message"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-black hover:bg-gray-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
