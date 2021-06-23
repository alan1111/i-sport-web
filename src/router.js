import { Discern, Home, App } from "./pages";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/discern",
    component: Discern,
    routes: [
      {
        path: "/discern/app",
        component: App,
      },
    ],
  },
];
export default routes;
