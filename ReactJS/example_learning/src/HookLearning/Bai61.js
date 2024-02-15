import { useEffect, useState } from "react";
import NavigateHome from "../components/NavigateHome/navigateHome";
const lessons = [
  {
    id: 1,
    name: "61. useEffect with fake Chat App  ",
  },
  {
    id: 2,
    name: "62. useLayoutEffect hook  ",
  },
  {
    id: 3,
    name: "63. Ôn tâp useLayoutEffect Hook ",
  },
];
export default function Bai61() {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div style={{ marginLeft: "32px" }}>
      <NavigateHome></NavigateHome>
      <h1>61 useEffect with fake Chat App</h1>
      <ul>
        {lessons.map((lesson) => {
          return (
            <li
              key={lesson.id}
              style={{ color: lessonId === lesson.id ? "red" : "#333" }}
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
