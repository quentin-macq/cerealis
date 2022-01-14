<template>
  <ion-content class="camera-item">
    <PopupItem :imageUrl="imageUrl" v-if="imageUrl" />

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
import { ref } from 'vue';

export default {
  components: {
    PopupItem
  },

  setup() {
    const imageUrl = ref('');

    const takePhoto = async () => {
      // Otherwise, make the call:
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
          // source: CameraSource.Prompt,
        });

        imageUrl.value = image.dataUrl;
      } catch (e) {
        console.log('error', e);
      }
    };
    return {
      takePhoto,
      imageUrl,
      camera
    };
  }
};
</script>

<style lang="scss" src="./camera-item.scss" scoped />
