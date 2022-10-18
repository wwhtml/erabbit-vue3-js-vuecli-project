import { createRouter, createWebHashHistory } from "vue-router";

const Layout = () => import("@/views/Layout.vue");
const Home = () => import("@/views/home/index.vue");
import TopCategory from "@/views/category";
import SubCategory from "@/views/category/sub";
const Goods = () => import("@/views/goods/index");

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: Home },
      { path: "/category/:id", component: TopCategory },
      { path: "/category/sub/:id", component: SubCategory },
      { path: "/product/:id", component: Goods },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
