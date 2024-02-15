import { memo } from "react";

function Content66() {
  console.log("re-render");
  return <div>HELLO</div>;
}
export default memo(Content66);
