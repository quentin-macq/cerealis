<template>
  <ion-content class="camera-item">
    <PopupItem :imageSrc="imageSrc" v-if="imageSrc" />

    <ion-fab vertical="bottom" horizontal="center" slot="fixed">
      <ion-fab-button @click="takePhoto()">
        <ion-icon :icon="camera" />
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script>
import PopupItem from '@/components/Popup/PopupItem';
import { Camera, CameraResultType } from '@capacitor/camera';
import { camera } from 'ionicons/icons';

export default {
  components: {
    PopupItem
  },

  data() {
    return {
      imageSrc: '',
      camera
    };
  },

  methods: {
    async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      this.imageSrc = image.webPath;
    }
  }
};
</script>

<style lang="scss" src="./camera-item.scss" scoped />
