import { Link } from "react-router-dom";
import Bai48 from "../Bai48";

export default function Home() {
  const list = [
    {
      key: "bai48",
      name: "Bài 48 - UseState",
      route: "/bai48",
    },
    {
      key: "bai50-1",
      name: "Bài 50-1",
      route: "/bai501",
    },
    {
      key: "bai50-2",
      name: "Bài 50-2",
      route: "/bai502",
    },
    {
      key: "bai50-3",
      name: "Bài 50-3",
      route: "/bai503",
    },
    {
      key: "bai50-4",
      name: "Bài 50-4",
      route: "/bai504",
    },
    {
      key: "bai51",
      name: "Bài 51",
      route: "/bai51",
    },
    {
      key: "bai53",
      route: "/bai53",
      name: "Bài 53 - Use Effect",
    },
    {
      key: "bai57",
      route: "/bai57",
      name: "Bài 57 - useEffect with DOM events",
    },
    {
      key: "bai601",
      route: "/bai601",
      name: "60.1 useEffect with preview avatar - Clean up function",
    },
    {
      key: "bai602",
      route: "/bai602",
      name: "60.2 useEffect with preview avatar ",
    },
    {
      key: "bai61",
      route: "/bai61",
      name: "61. useEffect with fake Chat App ",
    },
    {
      key: "bai62",
      route: "/bai62",
      name: "62. useEffect with fake Chat App ",
    },
    {
      key: "bai64",
      route: "/bai64",
      name: "64. useEffect with fake Chat App ",
    },
    {
      key: "bai66",
      route: "/bai66",
      name: "66. React.memo HOC",
    },
  ];
  return (
    <>
      <h1>Hook</h1>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.key}>
              <Link to={item.route}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
