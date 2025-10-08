'use client'
import { useState, useEffect } from 'react';

const DeadlineTimer = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const deadline = new Date('2025-10-30T23:59:59');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = deadline - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-bold mb-4">Time Left to Complete Course</h2>
      {timeLeft ? (
        <div className="text-4xl font-bold text-yellow-600">
          <span>{timeLeft.days}</span> : <span>{timeLeft.hours}</span> : <span>{timeLeft.minutes}</span> : <span>{timeLeft.seconds}</span>
        </div>
      ) : (
        <div className="text-4xl font-bold text-yellow-600">
          Loading...
        </div>
      )}
    </div>
  );
};

export default DeadlineTimer;
