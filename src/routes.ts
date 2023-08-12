import { lazy } from "solid-js";

const routes = [
    {
        path: "/home",
        component: lazy(() => import('./pages/HomePage')),
    },
];

const root = [
    {
        path: "/home",
        component: import("./pages/LandingPage"),
        children: routes,
    },
];

export default root;
