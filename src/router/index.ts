import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import Projects from '../pages/Projects.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import ProjectFileManager from '../pages/Projects/FileManager.vue';
import RoutePlanner from '../pages/Projects/RoutePlanner.vue';
import PrivateArea from '../pages/Projects/PrivateArea.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  {
    path: '/project/filemanager',
    name: 'project-file-manager',
    component: ProjectFileManager,
  },
  {
    path: '/project/routeplanner',
    name: 'route-planner',
    component: RoutePlanner,
  },
  {
    path: '/project/privatearea',
    name: 'private-area',
    component: PrivateArea,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si vienes de “atrás” (back/forward), respeta la posición
    if (savedPosition) {
      return savedPosition;
    }

    // Si hay hash (#section), haz scroll hacia ese elemento
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    // En cualquier otra navegación, sube al principio
    return { left: 0, top: 0 };
  },
});

export default router;
