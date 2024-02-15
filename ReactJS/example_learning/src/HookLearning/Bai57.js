import { useEffect, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";

export default function Bai57() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const handleScroll = () => {
      //   if (window.scrollY >= 200) {
      //     setShowGoToTop(true);
      //   } else {
      //     setShowGoToTop(false);
      //   }
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);

    //clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

      <h1>Bài 57: useEffect with DOM events</h1>
      <h2>Xây dựng nút cho phép người dùng quay lại đầu trang</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            width: "100px",
            height: "50px",
            backgroundColor: "red",
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
}
