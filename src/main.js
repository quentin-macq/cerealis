import { createApp } from 'vue';
import App from './App.vue';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

import router from '@/router';
import store from './store/store';

import {
  IonicVue,
  IonApp,
  IonPage,
  IonImg,
  IonIcon,
  IonFab,
  IonFabList,
  IonFabButton,
  IonBackButton,
  IonButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonSlides,
  IonSlide,
  IonAlert,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App).use(IonicVue).use(router);

app.use(store);

app.component('ion-app', IonApp);
app.component('ion-page', IonPage);
app.component('ion-fab', IonFab);
app.component('ion-fab-list', IonFabList);
app.component('ion-fab-button', IonFabButton);
app.component('ion-button', IonButton);
app.component('ion-back-button', IonBackButton);
app.component('ion-img', IonImg);
app.component('ion-icon', IonIcon);
app.component('ion-content', IonContent);
app.component('ion-grid', IonGrid);
app.component('ion-row', IonRow);
app.component('ion-col', IonCol);
app.component('ion-slides', IonSlides);
app.component('ion-slide', IonSlide);
app.component('ion-alert', IonAlert);
app.component('ion-card', IonCard);
app.component('ion-card-header', IonCardHeader);
app.component('ion-card-title', IonCardTitle);
app.component('ion-card-subtitle', IonCardSubtitle);
app.component('ion-card-content', IonCardContent);

app.mount('#app');

defineCustomElements(window);
