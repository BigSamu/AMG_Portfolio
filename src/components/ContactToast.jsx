import React, { useContext } from 'react';
import { Toast } from 'flowbite-react';
import { FaTelegramPlane, FaTimesCircle } from 'react-icons/fa';
import ToastContext from '../contexts/ToastContext';

const ContactToast = () => {
  const { toastInfo, setToastInfo } = useContext(ToastContext);
  console.log(toastInfo)

  const backgroundColor = toastInfo.type === 'success' ? '!bg-green-200 dark:!bg-green-700' : '!bg-red-200 dark:!bg-red-700';
  const textColor = toastInfo.type === 'success' ? 'text-green-500 dark:text-green-200' : 'text-red-500 dark:text-red-200';

  return (
    <div className="fixed top-5 right-5 z-50">
      <Toast onClose={() => setToastInfo(null)} className={backgroundColor}>
        <div className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${textColor}`}>
          {toastInfo.type === 'success' ? (
            <FaTelegramPlane className={`h-5 w-5 ${textColor}`} />
          ) : (
            <FaTimesCircle className={`h-5 w-5 ${textColor}`} />
          )}
        </div>
        <div className={`mx-3 text-sm font-normal ${textColor}`}>{toastInfo.message}</div>
        <Toast.Toggle />
      </Toast>
    </div>
  );
};

export default ContactToast;



