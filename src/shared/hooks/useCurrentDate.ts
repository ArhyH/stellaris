import { useEffect, useState } from 'react';
import { getPrevMonth } from '../helpers';

const useCurrentDate = () => {
  const [currentMonth, setCurrentMonth] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const current = new Date();

      setCurrentMonth((prev) => {
        if (
          current.getDate() !== prev.getDate() ||
          current.getMonth() !== prev.getMonth()
        ) {
          return current;
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const prevMonth = getPrevMonth(currentMonth);

  return { currentMonth, prevMonth };
};

export { useCurrentDate };
