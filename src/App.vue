<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import { IonRouterOutlet } from '@ionic/vue';

const store = useStore();

onBeforeMount(() => {
  localStorage.clear();
  store.commit('initialiseStore');
});
</script>
