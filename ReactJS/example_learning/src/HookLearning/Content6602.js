import { memo } from "react";

function Content6602({ count }) {
  console.log("re-render2");
  return <div>HELLO 2 - {count}</div>;
}
export default memo(Content6602);
