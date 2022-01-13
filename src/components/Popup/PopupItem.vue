<template>
  <div class="popup-item">
    <ion-card class="popup-item__card">
      <ion-card-header>
        <ion-card-title class="popup-item__title">
          Here is your picture! ❤️
        </ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-img :src="imageSrc" alt="" class="popup-item__config" />

        <ion-content class="popup-item__share-button">
          <ion-fab horizontal="start" vertical="top">
            <ion-fab-button color="dark">
              <ion-icon :icon="shareOutline" />
            </ion-fab-button>

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
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
import {
  logoFacebook,
  logoInstagram,
  logoTwitter,
  shareOutline
} from 'ionicons/icons';

export default {
  data() {
    return {
      logoFacebook,
      logoTwitter,
      logoInstagram,
      shareOutline
    };
  },

  props: {
    imageSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" src="./popup-item.scss" scoped />
