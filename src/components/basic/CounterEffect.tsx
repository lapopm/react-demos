import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count != 0) document.title = `count ${count}`;
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increments</button>
    </div>
  );
};

export default CounterEffect;
