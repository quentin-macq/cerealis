<template>
  <ion-app>
    <HomePage />
  </ion-app>
</template>

<script>
import { IonApp } from '@ionic/vue';
import HomePage from '@/pages/Home/HomePage';

export default {
  name: 'App',
  components: {
    IonApp,
    HomePage
  }
};
</script>
