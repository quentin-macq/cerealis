<template>
  <ion-page className="home-page">
    <CameraItem v-if="welcomeMessage" />
    <SlideItem v-else />
  </ion-page>
</template>

<script setup>
import SlideItem from '@/components/Slide/SlideItem';
import CameraItem from '@/components/Camera/CameraItem';
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const welcomeMessage = computed(() => store.state.welcomeMessage);

onBeforeMount(() => {
  localStorage.clear();
  store.commit('initialiseStore');
});
</script>

<style lang="scss" src="./home-page.scss" scoped />
