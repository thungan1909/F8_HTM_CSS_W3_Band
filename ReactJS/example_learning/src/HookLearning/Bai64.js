import { useRef, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

export default function Bai64() {
  const [count, setCount] = useState(60);
  let timerRef = useRef();
  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
  };
  return (
    <div style={{ marginLeft: "32px" }}>
      <NavigateHome></NavigateHome>
      <h1>64. useRef hook</h1>
      <hr></hr>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <hr></hr>
      <h2>{count}</h2>
    </div>
  );
}
