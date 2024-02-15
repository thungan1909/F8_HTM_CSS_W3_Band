import { useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";
//Từ 07:00 - 11:30
export default function Bai50_2() {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <div style={{ padding: 32 }}>
      <NavigateHome></NavigateHome>
      <h1> Bài 50: Two-way binding trong React? (50_2)</h1>
      <span> One way binding - Thay đổi dữ liệu bên ngoài (1 chiều) mà state bên trong (chiều còn lại) cũng thay đổi </span>
      <span>Two way binding -Bổ sung thêm thay đổi bên trong dẫn đến bên ngoài thay đổi (Cả 2 chiều) </span>


      <br></br>
    

      {/* One way binding - Thay đổi dữ liệu bên ngoài (1 chiều) mà state bên trong (chiều còn lại) cũng thay đổi */}
      {/* <input onChange={e => setName(e.target.value)}/> */}

      {/* Two way binding - Bổ sung thêm thay đổi bên trong dẫn đến bên ngoài thay đổi */}

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setName("Nguyen Van BBB")}>Change Name</button>
    </div>
  );
}
