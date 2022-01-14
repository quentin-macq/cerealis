<template>
  <ion-content class="camera-item" fullscreen>
    <PopupItem :imageUrl="imageUrl" v-if="imageUrl" />

    <ion-content v-else>
      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button class="camera-item__help" id="hover-button">
          <ion-icon :icon="help" />
          <ion-popover trigger-action="hover" trigger="hover-button">
            <ion-content>Help !</ion-content>
          </ion-popover>
        </ion-fab-button>
      </ion-fab>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto">
          <ion-icon :icon="camera" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-content>
</template>

<script setup>
import PopupItem from '@/components/Popup/PopupItem';
import { Camera, CameraResultType } from '@capacitor/camera';
import { camera, help } from 'ionicons/icons';
import { ref } from 'vue';
// import { onMounted, ref } from 'vue';

// onMounted(async () => {
//   try {
//     const image = await Camera.getPhoto({
//       quality: 90,
//       allowEditing: false,
//       resultType: CameraResultType.Uri,
//       correctOrientation: true,
//       presentationStyle: 'fullscreen',
//       saveToGallery: true
//     });
//
//     imageUrl.value = image.webPath;
//   } catch (e) {
//     console.log('error', e);
//   }
// });

// let popover = ref(false);
const imageUrl = ref('');

// const isPopoverOpen = () => {
//   const help = document.querySelector('.camera-item__help');
//
//   help.addEventListener('click', () => {
//     popover = !popover.value;
//   });
//
//   return popover;
// };

const takePhoto = async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      correctOrientation: true,
      presentationStyle: 'fullscreen',
      saveToGallery: true
    });

    imageUrl.value = image.webPath;
  } catch (e) {
    console.log('error', e);
  }
};
</script>

<style lang="scss" src="./camera-item.scss" scoped />
