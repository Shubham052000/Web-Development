import { useRef, useState } from "react";

const TimerWithMinutesAndSeconds = () => {
  let timerRef = useRef<number>(0);

  const [timerVal, setTimerVal] = useState(0);

  const startHandler = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimerVal((timerVal) => timerVal + 1);
    }, 1000);
  };

  const pauseHandler = () => {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  };

  const formatTimer = () => {
    const seconds = String(timerVal % 60).padStart(2, "0");
    const minutes = String(Math.floor(timerVal / 60)).padStart(2, "0");

    return `${minutes} : ${seconds}`;
  };

  return (
    <div className="w-full text-center">
      <h1 className="my-5">{formatTimer()}</h1>
      <button
        className="px-3 py-1 rounded-md bg-green-500 hover:bg-green-700 border-2 border-green-800 mr-5"
        onClick={startHandler}
      >
        Start
      </button>
      <button
        className="px-3 py-1 rounded-md bg-red-500 hover:bg-red-700 border-2 border-red-800 mr-5"
        onClick={pauseHandler}
      >
        Pause
      </button>
      <button
        className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-700 border-2 border-blue-800"
        onClick={() => setTimerVal(0)}
      >
        Clear
      </button>
    </div>
  );
};

export default TimerWithMinutesAndSeconds;
