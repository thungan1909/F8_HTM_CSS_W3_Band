import { useRef, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";
import Content66 from "./Content66";
import Content6602 from "./Content6602";

export default function Bai66() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div style={{ marginLeft: "32px" }}>
      <h1>66. React.memo HOC</h1>
      <Content66 />
      <Content6602 count={count} />
      <span> {count}</span>
      <button onClick={handleCount}>Count</button>
      <hr></hr>
    </div>
  );
}
