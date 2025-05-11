import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const timer = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <div>
      Timer: {count} seconds
      <button onClick={() => clearInterval(timer.current)}>Clear Timer</button>
    </div>
  );
};

export default Timer;
