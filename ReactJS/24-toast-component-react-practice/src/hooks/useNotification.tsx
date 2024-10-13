import { useCallback, useState } from "react";
import Notification, { NotificationProps } from "../components/Notification";

type PositionType = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export default function useNotification(pos: PositionType = "bottom-right") {
  const [notification, setNotification] = useState<NotificationProps | null>(
    null
  );

  let timer: number;

  const triggerNotification = useCallback(
    ({ message, type, duration, onClose }: NotificationProps) => {
      clearTimeout(timer);
      setNotification({ message, type, duration, onClose });
      timer = setTimeout(() => {
        setNotification(null);
      }, duration);
    },
    []
  );

  const NotificationComponent = notification ? (
    <div
      className={`fixed ${
        pos === "bottom-right"
          ? "bottom-8 right-8"
          : pos === "bottom-left"
          ? "bottom-8 left-8"
          : pos === "top-right"
          ? "top-8 right-8"
          : pos === "top-left"
          ? "top-8 left-8"
          : ""
      }`}
    >
      <Notification {...notification} />
    </div>
  ) : null;

  return { triggerNotification, NotificationComponent };
}
