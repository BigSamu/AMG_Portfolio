import React, { useContext } from "react";
import { Toast } from "flowbite-react";
import { FaTelegramPlane, FaTimesCircle } from "react-icons/fa";
import ToastContext from "../contexts/ToastContext";

const ContactToast = () => {
  const { toastInfo, setToastInfo } = useContext(ToastContext);

  const backgroundColor =
    toastInfo.type === "success" ? "!bg-green-700" : "!bg-red-700";
  const textColor =
    toastInfo.type === "success" ? "text-green-200" : "text-red-200";

  return (
    <div className="fixed sm:top-5 sm:right-5 sm:left-auto bottom-0 sm:bottom-auto w-full sm:w-auto z-50">
      <Toast onClose={() => setToastInfo(null)} className={`${backgroundColor} rounded-none sm:rounded-lg`}>
        <div
          className={`inline-flex h-8 w-8 items-center justify-center ${textColor}`}
        >
          {toastInfo.type === "success" ? (
            <FaTelegramPlane className={`h-5 w-5 ${textColor}`} />
          ) : (
            <FaTimesCircle className={`h-5 w-5 ${textColor}`} />
          )}
        </div>
        <div className={`mx-3 text-sm font-normal ${textColor}`}>
          {toastInfo.message}
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
};

export default ContactToast;
