import useNotification from "./hooks/useNotification";

function App() {
  //custom hook - useNotification(position)
  const { triggerNotification, NotificationComponent } =
    useNotification("bottom-left");
  return (
    <div>
      <button
        onClick={() => {
          triggerNotification({
            message: "File sent successfully",
            type: "success",
            duration: 3000,
            onClose: () => {},
          });
        }}
        className="bg-green-400 rounded-full px-4 py-2 text-white "
      >
        Trigger Success
      </button>
      <button
        onClick={() => {
          triggerNotification({
            message: "Something went wrong",
            type: "error",
            duration: 3000,
            onClose: () => {},
          });
        }}
        className="bg-red-400 rounded-full px-4 py-2 text-white "
      >
        Trigger error
      </button>
      {NotificationComponent}
    </div>
  );
}

export default App;
