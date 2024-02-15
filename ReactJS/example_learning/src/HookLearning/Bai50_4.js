import { useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

//Từ 14:00 - hêt

//Response from API
const course = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "JavaScript",
  },
  {
    id: 3,
    name: "React JS",
  },
];
export default function Bai50_4() {
  // Checked lưu giá trị id đã check
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        //Uncheck
        // filter: lọc lấy ra những item có item như id truyền vào (check 2 lần => uncheck)
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div style={{ padding: 32 }}>
      <NavigateHome></NavigateHome>
      <h1> Bài 50: Two-way binding trong React? (50_4)</h1>
      <span>Ứng dụng của 2 way binding: Dùng với checkbox</span>
      {course.map((course) => (
        // so sánh checked với course.id đang click
        // trả về true/false. Nếu đúng thì mới check và lưu vào checked (phương thức sẵn)
        // nếu checked = true thì mới gọi setChecked
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          ></input>
          {course.name}
        </div>
      ))}
    </div>
  );
}
