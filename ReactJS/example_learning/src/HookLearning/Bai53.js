import { useEffect, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

// 1. useEffect(callback)
// -  Gọi callback sau mỗi khi component re-render
// - Gọi callback sau khi thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// - Áp dụng để khi muốn gọi logic 1 lần
// 3. useEffect(callback, [deps])

// --------------
// Chung cho cả 3 loại useEfect
// -Callback luôn được gọi sau khi component mounted (lắp vào)

export default function Bai53() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  // Cach 1
  // useEffect(() => {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(res => res.json ())
  // .then(posts =>{
  //     setPosts(posts);
  // });
  //  })
  //Lam cách này không ổn, vì khi useEffect thì sẽ gọi callback sau mỗi khi component re-render
  //Mà ta lại gọi setPost trong đó, khi setPost thì sẽ làm gọi lại render lại
  // => Tạo vòng lặp vô tận

  useEffect(() => {
    //Cach 2, chỉ gọi 1 lần
    //Áp dụng khi muốn thực hiện 1 logic nào chỉ chạy 1 lần sau khi component mounted => truyền vào []
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div style={{ marginLeft: "32px" }}>
      <NavigateHome></NavigateHome>
      <h1> Bài 53: useEffect</h1>
      <span>
        Callback trong useEffect chỉ được gọi sau khi element đã được render vào
        DOM.
      </span>
      {/* <span>VD</span> */}
      {/* function App() {
                useEffect(() => {
                    console.log(1)
                })

                return (
                    <div>
                        {console.log(2)}
                        <h1>F8 - Học lập trình để đi làm</h1>
                    </div>
                )
                }

                export default App; */}
      {/* <span>Chạy console.log(2) trước</span> */}
      <h2> 1. useEffect(callback)</h2>
      <span>- Gọi callback sau mỗi khi component re-render</span>
      <br></br>
      <span>- Gọi callback sau khi thêm element vào DOM</span>
      <h2>2. useEffect(callback, [])</h2>
      <span>- Chỉ gọi callback 1 lần sau khi component mounted</span> <br></br>
      <span>- Áp dụng để khi muốn gọi logic 1 lần</span>
      <h2>3. useEffect(callback, [deps])</h2>
      <hr style={{ marginBlock: "24px" }}></hr>
      <h2>Ví dụ</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
