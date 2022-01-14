<template>
  <ion-page fullscreen class="ion-padding" :scroll-y="false">
    <swiper>
      <swiper-slide>
        <ion-button
          fill="clear"
          @click="setWelcomeMessagePassed"
          router-link="/camera">
          Skip
          <ion-icon slot="end" :icon="arrowForward" />
        </ion-button>
        <img :src="require('./img/slide-1.png')" />
        <h2>Welcome</h2>
        <p>
          The <b>ionic conference app</b> is a practical preview of the ionic
          framework in action, and a demonstration of proper code use.
        </p>
      </swiper-slide>

      <swiper-slide>
        <img :src="require('./img/slide-2.png')" />
        <h2>What is Ionic?</h2>
        <p>
          <b>Ionic Framework</b> is an open source SDK that enables developers
          to build high quality mobile apps with web technologies like HTML,
          CSS, and JavaScript.
        </p>
      </swiper-slide>

      <swiper-slide>
        <img :src="require('./img/slide-4.png')" />
        <h2>Ready to Play?</h2>
        <ion-button
          fill="clear"
          @click="setWelcomeMessagePassed"
          router-link="/camera">
          Continue
          <ion-icon slot="end" :icon="arrowForward" />
        </ion-button>
      </swiper-slide>
    </swiper>
  </ion-page>
</template>

<script setup>
import { arrowForward } from 'ionicons/icons';
import { useStore } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

const store = useStore();

const setWelcomeMessagePassed = () => {
  store.commit('welcomeMessagePassed');
};
</script>

<style lang="scss" src="./slide-item.scss" scoped />
