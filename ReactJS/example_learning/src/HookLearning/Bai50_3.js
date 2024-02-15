import { useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";
//Từ 11:40 - 13:47
// Ứng dụng của 2 way binding trong làm form
export default function Bai50_3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    // CALL API
    console.log({
      name,
      email,
    });
  };
  return (
    <div style={{ padding: 32 }}>
      <NavigateHome></NavigateHome>
      <h1> Bài 50: Two-way binding trong React? (50_3)</h1>
      <span>Ứng dụng của 2 way binding: Dùng trong form</span>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
