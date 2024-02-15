import { useEffect, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

export default function Bai602() {
  const [avt, setAvt] = useState();
  useEffect(() => {
    //clean up, đảm bảo trước khi tải ảnh khác lên thì xoá ảnh cũ => tránh rò rĩ bộ nhớ
    return () => {
      URL.revokeObjectURL(avt?.preview);
    };
  }, [avt]);
  const handlePreviewAvt = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvt(file);
  };
  return (
    <div style={{ marginLeft: "32px" }}>
      <NavigateHome></NavigateHome>
      <h1>60.2 useEffect with preview avatar</h1>
      <input type="file" multiple onChange={handlePreviewAvt}></input>
      {avt && <img src={avt.preview}></img>}
    </div>
  );
}
