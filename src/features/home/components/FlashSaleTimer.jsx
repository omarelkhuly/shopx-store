// src/features/home/components/FlashSaleTimer.jsx
import { useEffect, useState } from "react";

const FlashSaleTimer = ({ endTime }) => {
  const format = (num) => String(num).padStart(2, "0");

  const calculateTimeLeft = () => {
    if (!endTime) return null;

    const end = new Date(endTime);

    // 🔥 حماية من Invalid Date
    if (isNaN(end.getTime())) return null;

    const now = new Date();
    const difference = end - now;

    if (difference <= 0) return null;

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    if (!endTime) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  // ⛔ لو مفيش endTime أو invalid
  if (!timeLeft) {
    return <span>Sale Ended</span>;
  }

  return (
    <div className="flash-sale-timer">
      <span>{format(timeLeft.hours)}h</span> :
      <span>{format(timeLeft.minutes)}m</span> :
      <span>{format(timeLeft.seconds)}s</span>
    </div>
  );
};

export default FlashSaleTimer;