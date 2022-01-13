<template>
  <ion-page>
    <CameraItem v-if="welcomeMessage" />
    <SlideItem v-else />
  </ion-page>
</template>

<script>
import SlideItem from '@/components/Slide/SlideItem';
import CameraItem from '@/components/Camera/CameraItem';

export default {
  components: {
    SlideItem,
    CameraItem
  },

  computed: {
    welcomeMessage() {
      return this.$store.state.welcomeMessage;
    }
  },

  beforeCreate() {
    localStorage.clear();
    this.$store.commit('initialiseStore');
  }
};
</script>

<style scoped />
