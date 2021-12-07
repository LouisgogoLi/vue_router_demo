import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import VuejsHome from "@/views/Vuejs/index.vue";
import Guide from "@/views/Vuejs/Guide.vue";
import Reference from "@/views/Vuejs/Reference.vue";
import Changelog from "@/views/Vuejs/Changelog.vue";
import GitHub from "@/views/Vuejs/GitHub.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/index.html",
    name: "index",
    redirect: { name: "Home" },
  },
  {
    path: "/rwd",
    name: "rwd",
    component: () => import("@/views/Rwd.vue"),
  },
  {
    path: "/vuejs",
    name: "vuejs",
    component: () => import("@/views/Vuejs.vue"),
    children: [
      {
        path: "",
        name: "vuejs_index",
        component: VuejsHome,
      },
      {
        path: "guide",
        name: "vuejs_guide",
        component: Guide,
      },
      {
        path: "reference",
        name: "vuejs_reference",
        component: Reference,
      },
      {
        path: "changelog",
        name: "vuejs_changelog",
        component: Changelog,
      },
      {
        path: "gitHub",
        name: "vuejs_gitHub",
        component: GitHub,
      },
    ],
  },
  {
    path: "/reactjs",
    name: "reactjs",
    component: () => import("@/views/Reactjs.vue"),
  },
  {
    path: "/html5",
    name: "html5",
    component: () => import("@/views/Html5.vue"),
  },
  {
    path: "/nodejs",
    name: "nodejs",
    component: () => import("@/views/Nodejs.vue"),
    beforeEnter: (to, from) => {
      // 返回 false 以取消导航
      //return false
      console.log(to, from, 3);
    },
  },
  {
    path: "/courses",
    name: "courses",
    component: () => import("@/views/Courses/index.vue"),
  },
  {
    path: "/courses/:courseId",
    name: "courses_courseId",
    component: () => import("@/views/Courses/_courseId.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // 返回 false 以取消导航
  //return false
  console.log(to, from, 2);
});

router.beforeResolve((to, from) => {
  // 返回 false 以取消导航
  //return false
  console.log(to, from, 4);
});

router.afterEach((to, from) => {
  // 返回 false 以取消导航
  //return false
  console.log(to, from, 5);
});

export default router;
