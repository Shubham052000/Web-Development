import { useState } from "react";

const OverlayModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <button
        className="cursor-pointer bg-amber-500 px-4 py-4 rounded-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Click to Open modal
      </button>
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-black z-10 absolute">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl"> Modal heading</p>
              <button
                className="text-gray-500 hover:text-gray-800 font-bold text-xl"
                onClick={() => setIsModalOpen(false)}
                tabIndex={0}
              >
                X
              </button>
            </div>
            <p>Modal description</p>
            <div className="mt-4 flex justify-end gap-2 text-white">
              <button
                className="bg-yellow-400 px-4 py-2 rounded-lg cursor-pointer"
                onClick={() => {
                  setIsModalOpen(false);
                  alert("Submitted!");
                }}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 bg-gray-500 rounded-lg cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OverlayModal;
