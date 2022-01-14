import { createRouter, createWebHistory } from '@ionic/vue-router';
import CameraItem from '@/components/Camera/CameraItem';
import PopupItem from '@/components/Popup/PopupItem';
import SlideItem from '@/components/Slide/SlideItem';
import HomePage from '@/pages/Home/HomePage';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: SlideItem
  },
  {
    path: '/camera',
    name: 'Camera',
    component: CameraItem
  },
  {
    path: '/popup',
    name: 'Popup',
    component: PopupItem
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
