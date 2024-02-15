import { useEffect, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

export default function Bai601() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("Re-render lần", count);

    //clean up func
    return () => {
      console.log("Clean up lần", count);
    };
  }, [count]);
  return (
    <div style={{ marginLeft: "32px" }}>
      <NavigateHome></NavigateHome>
      <h1>60.1 useEffect with preview avatar- Clean up function</h1>
      <h3>Trước khi thực hiện callback mới thì sẽ dọn dẹp callback trước đó</h3>
      <h3>
        Clean up function luôn được gọi trước khi callback được gọi (trừ trường
        hợp đầu tiên) - Tránh rò rĩ bộ nhớ
      </h3>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  );
}
