import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

export type NotificationProps = {
  type?: "info" | "success" | "warning" | "error";
  message: string;
  onClose: () => void;
  duration?: number;
};

const icons = {
  info: <AiOutlineInfoCircle />,
  success: <AiOutlineCheckCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

function Notification({ type = "info", message, onClose }: NotificationProps) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg shadow-md text-white p-6 m-4
        ${
          type === "info"
            ? "bg-blue-500"
            : type === "warning"
            ? "bg-yellow-500"
            : type === "error"
            ? "bg-red-500"
            : type === "success"
            ? "bg-green-500"
            : "bg-black"
        }`}
    >
      {/* icon */}
      {icons[type]}
      {/* message  */}
      {message}
      {/* close-button  */}
      {
        <AiOutlineClose
          color="white"
          onClick={onClose}
          className="cursor-pointer"
        />
      }
    </div>
  );
}

export default Notification;
