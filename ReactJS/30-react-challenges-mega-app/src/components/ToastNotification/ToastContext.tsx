import { createContext, useState } from "react";

type Toasts = {
  id: string;
  message: string;
};

const toastContext = createContext<{
  setCurrMsg: (msg: string) => void;
  showToast: () => void;
}>({
  setCurrMsg: () => {},
  showToast: () => {},
});

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [currMsg, setCurrMsg] = useState("");
  const [toasts, setToasts] = useState<Toasts[]>([]);
  // const [toastVisisble, setToastVisible] = useState(false);
  const showToast = () => {
    setToasts((prev) => [
      ...prev,
      { id: Date.now().toString(), message: currMsg },
    ]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1)); // Remove the first toast after showing
    }, 5000); // Hide toast after 3 seconds
  };
  return (
    <toastContext.Provider value={{ setCurrMsg, showToast }}>
      {toasts.length > 0 && (
        <ul className="flex-col absolute right-4 top-10">
          {toasts.map((toast) => (
            <li
              className="border border-amber-100 flex bg-amber-500 p-2 rounded-md text-white mb-4"
              key={toast.id}
            >
              <span>{currMsg}</span>
              <button
                className="px-2 text-white bg-amber-500 rounded-md"
                onClick={() => {
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      {children}
    </toastContext.Provider>
  );
};

export default toastContext;
