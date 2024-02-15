import { useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

//Từ 14:00 - hêt

//Response from API
export default function Bai51() {
  /*
   //Lây dữ liệu từ localstorage
    //JSON.parse trả về object
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    
  const [job, setJob] = useState('');
  // Toán tử ?? là trong trường hợp null hoặc identify thì truyền vào là mảng [] (mảng rỗng)
  const [jobs, setJobs] = useState(storageJobs ?? []); 

    Nhưng cách này mỗi lần gọi thì phải dùng JSON.parse, trong khi nó chỉ cần parse 1 lần đầu, những lần sau không cần
  */

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs ?? [];
  });

  console.log(job);
  const handleSubmit = () => {
    // Bảo lưu các Job cũ khi thêm Job mới, danh sách tăng dần dùng prev
    setJobs((prevJob) => {
      const newJobs = [...prevJob, job];

      // Chuyển thành chuỗi
      const jsonJobs = JSON.stringify(newJobs);
      // Lưu vào localStorage
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 32 }}>
      <NavigateHome></NavigateHome>
      <h1> Bài 51: To do list với useState</h1>
      {/* Nhận job nhập vào, gán vào setJob */}
      <input value={job} onChange={(e) => setJob(e.target.value)} />

      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}> {job}</li>
        ))}
      </ul>
    </div>
  );
}
