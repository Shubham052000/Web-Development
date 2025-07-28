import { useContext } from "react";
import toastContext from "./ToastContext";

const ToastNotification = () => {
  const { setCurrMsg, showToast } = useContext(toastContext);

  const handleClick = () => {
    setCurrMsg("This is a toast notification!");
    showToast();
  };

  return (
    <button
      className="border-amber-50 px-5 py-2 cursor-pointer border rounded-md bg-amber-500 text-white"
      onClick={handleClick}
    >
      Click to get toast Notification
    </button>
  );
};

export default ToastNotification;
