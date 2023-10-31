import { createContext, useState } from 'react';
import ContactToast from '../components/ContactToast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastInfo, setToastInfo] = useState({ message:"", type:"", visible: false });

  const showToast = (message, type, duration = 5000) => {
    setToastInfo({ message, type, visible: true });

    setTimeout(() => {
      setToastInfo({ message:"", type:"", visible: false });
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toastInfo, setToastInfo, showToast }}>
      {children}
      {toastInfo.visible && <ContactToast />}
    </ToastContext.Provider>
  );
};

export default ToastContext;
