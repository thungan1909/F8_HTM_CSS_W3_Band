import { useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";
// Từ 00:00 - 07:00
const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];
export default function Bai50_1() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    // Math.random: Lay ngau nhien
    // Math.random * 3: lay ngau nhien trong 0,1,2
    // Math.floor: Lay phan nguyen
    //Vd: Math.floor(1.9) = 1, Math.floor(2.3) = 2
    setGift(gifts[index]);
  };
  return (
    <div style={{ padding: 32 }}>
      <NavigateHome></NavigateHome>
      <h1> Bài 50: Two-way binding trong React? (50_1)</h1>
      <span>Mô tả: Random ngẫu nhiên ra 1 phần thưởng</span>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}
