import { createContext, useState } from "react";

const toastContext = createContext<{
  setCurrMsg: (msg: string) => void;
  showToast: () => void;
}>({
  setCurrMsg: () => {},
  showToast: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [currMsg, setCurrMsg] = useState("");
  const [toastVisisble, setToastVisible] = useState(false);
  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000); // Hide toast after 3 seconds
  };
  return (
    <toastContext.Provider value={{ setCurrMsg, showToast }}>
      {toastVisisble && (
        <div className="border border-amber-100 absolute right-4 top-10 flex bg-amber-500 p-2 rounded-md text-white">
          <span>{currMsg}</span>
          <button
            className="px-2 text-white bg-amber-500 rounded-md"
            onClick={() => {
              setToastVisible(false);
              setCurrMsg("");
            }}
          >
            X
          </button>
        </div>
      )}
      {children}
    </toastContext.Provider>
  );
};

export default toastContext;
