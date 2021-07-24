import { Login, Discern, Home, App } from "./pages";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    component: Login,
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
