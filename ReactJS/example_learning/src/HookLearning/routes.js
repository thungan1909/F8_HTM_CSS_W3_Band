import Bai48 from "./Bai48";
import Bai50_1 from "./Bai50_1";
import Bai50_2 from "./Bai50_2";
import Bai50_3 from "./Bai50_3";
import Bai50_4 from "./Bai50_4";
import Bai51 from "./Bai51";
import Bai53 from "./Bai53";
import Bai57 from "./Bai57";
import Bai601 from "./Bai601";
import Bai602 from "./Bai602";
import Bai61 from "./Bai61";
import Bai62 from "./Bai62";
import Bai64 from "./Bai64";
import Bai66 from "./Bai66";

import Home from "./Home/home";

const routes = [
  {
    key: "default",
    route: "/",
    component: <Home></Home>,
  },
  {
    key: "home",
    route: "/home",
    component: <Home></Home>,
  },
  {
    key: "bai48",
    route: "/bai48",
    component: <Bai48></Bai48>,
  },
  {
    key: "bai50-1",
    route: "/bai501",
    component: <Bai50_1></Bai50_1>,
  },
  {
    key: "bai50-2",
    route: "/bai502",
    component: <Bai50_2></Bai50_2>,
  },
  {
    key: "bai50-3",
    route: "/bai503",
    component: <Bai50_3></Bai50_3>,
  },
  {
    key: "bai50-4",
    route: "/bai504",
    component: <Bai50_4></Bai50_4>,
  },
  {
    key: "bai51",
    route: "/bai51",
    component: <Bai51></Bai51>,
  },
  {
    key: "bai53",
    route: "/bai53",
    component: <Bai53></Bai53>,
  },
  {
    key: "bai57",
    route: "/bai57",
    component: <Bai57></Bai57>,
  },
  {
    key: "bai601",
    route: "/bai601",
    component: <Bai601></Bai601>,
  },
  {
    key: "bai602",
    route: "/bai602",
    component: <Bai602></Bai602>,
  },
  {
    key: "bai61",
    route: "/bai61",
    component: <Bai61></Bai61>,
  },
  {
    key: "bai62",
    route: "/bai62",
    component: <Bai62></Bai62>,
  },
  {
    key: "bai64",
    route: "/bai64",
    component: <Bai64></Bai64>,
  },
  {
    key: "bai66",
    route: "/bai66",
    component: <Bai66></Bai66>,
  },
];
export default routes;
