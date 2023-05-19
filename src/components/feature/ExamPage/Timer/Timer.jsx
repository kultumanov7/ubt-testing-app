import { useEffect, useState } from "react";
import "./Timer.scss";

const Timer = ({ started_at, completed_at }) => {
  const [remainingTime, setRemainingTime] = useState("00:00:00");

  useEffect(() => {
    const startedAt = new Date(started_at);
    const completedAt = new Date(completed_at);

    const timerInterval = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = completedAt.getTime() - currentTime.getTime();

      if (timeDiff <= 0) {
        // Timer has expired
        clearInterval(timerInterval);
        setRemainingTime("00:00:00");
      } else {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        setRemainingTime(formattedTime);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [started_at, completed_at]);

  return <div className="timer__green">{remainingTime}</div>;
};

export default Timer;
