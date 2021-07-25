import { Login, Discern, Home, App, Register } from "./pages";

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
    path: "/register",
    component: Register,
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
