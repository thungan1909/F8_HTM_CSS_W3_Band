import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HookLearning/Home/home";
import routes from "./HookLearning/routes";

export default function App() {
  const getRoutes = (allRoutes) => 
  allRoutes.map((route) =>{
    if (route.route)
    {
      return <Route key={route.key} path={route.route} element = {route.component} ></Route>
    }
  })
  return (
   <BrowserRouter>
   <Routes>
    {getRoutes(routes)}
   </Routes>
   </BrowserRouter>
  );
}
