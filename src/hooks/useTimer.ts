import { useState, useEffect, useRef } from 'react';

export const useTimer = (onTimeUpdate?: (minutes: number) => void) => {
  const [timeSpent, setTimeSpent] = useState(0); // in seconds
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimeSpent(prev => {
          const newTime = prev + 1;
          
          // Update parent component every minute
          if (Math.floor(newTime / 60) > lastUpdateRef.current) {
            lastUpdateRef.current = Math.floor(newTime / 60);
            onTimeUpdate?.(lastUpdateRef.current);
          }
          
          return newTime;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, onTimeUpdate]);

  const start = () => setIsActive(true);
  const pause = () => setIsActive(false);
  const reset = () => {
    setTimeSpent(0);
    setIsActive(false);
    lastUpdateRef.current = 0;
  };

  const getFormattedTime = () => {
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const getMinutes = () => Math.floor(timeSpent / 60);

  return {
    timeSpent,
    isActive,
    start,
    pause,
    reset,
    getFormattedTime,
    getMinutes,
  };
};