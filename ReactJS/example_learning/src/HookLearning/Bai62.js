import { useLayoutEffect, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

export default function Bai62() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ marginLeft: "32px" }}>
      <NavigateHome></NavigateHome>
      <h1>62. useLayoutEffect hook</h1>
      <h5>
        Mô tả: Giả sử như ta thiết lập để khi nhấn nút, biến count sẽ tăng lên 1
        đơn vị. Khi count lớn hơn 3, count sẽ được set giá vị về 0{" "}
      </h5>
      <h5>
        Vấn đề: Giả sử ta không thực hiện kiểm tra điều kiện trong handleCount
        mà ta kiểm tra bằng useEffect. Ta sẽ gặp vấn đề, khi count lớn hơn 3, nó
        sẽ nhảy nhanh lên 4 rồi chuyển lại thành 0. Điều này tạo thành sự nhấp
        nháy
      </h5>
      <h5>
        Giải thích: Với useEffect, khi giá trị Count thay đổi (despc thay đổi)
        thì useEffect sẽ thực hiện cập nhật lại DOM rồi render ra UI trước, cuối
        cùng mới chạy callback Điều này dẫn đến, nó sẽ render ra 4 xong mới chạy
        callback và set giá trị, render ra 0
      </h5>
      <h5>Cách giải quyết: Thay vì dùng useEffect, ta dùng useLayoutEffect</h5>
      <h5>
        Với useLayoutEffectm khi state thay đổi - cập nhật lại DOM - gọi
        callback - render lại UI
      </h5>
      <hr></hr>
      <button onClick={handleCount}>Click me</button>
      <hr></hr>
      <h2>{count}</h2>
    </div>
  );
}
