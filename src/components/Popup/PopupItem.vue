<template>
  <ion-content class="popup-item">
    <ion-card class="popup-item__card">
      <ion-card-header>
        <ion-card-title class="popup-item__title">
          Here is your picture! ❤️
        </ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-img :src="imageUrl" alt="" class="popup-item__config" />
      </ion-card-content>
    </ion-card>

    <ion-content class="popup-item__share-button">
      <ion-button router-link="/camera"> Back </ion-button>
      <ion-fab horizontal="center">
        <ion-button color="primary"> Share </ion-button>

        <ion-fab-list side="end">
          <ion-fab-button color="light">
            <ion-icon :icon="logoTwitter" />
          </ion-fab-button>
          <ion-fab-button color="light">
            <ion-icon :icon="logoFacebook" />
          </ion-fab-button>
          <ion-fab-button color="light">
            <ion-icon :icon="logoInstagram" />
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-content>
</template>

<script setup>
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { defineProps } from 'vue';

defineProps({
  imageUrl: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" src="./popup-item.scss" scoped />
