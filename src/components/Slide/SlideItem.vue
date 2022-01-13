<template>
  <ion-content fullscreen class="ion-padding" :scroll-y="false">
    <ion-slides>
      <ion-slide>
        <div class="slide">
          <ion-button fill="clear" @click="setWelcomeMessagePassed">
            Skip
            <ion-icon slot="end" :icon="arrowForward" />
          </ion-button>
          <img :src="require('./img/slide-1.png')" />
          <h2>Welcome</h2>
          <p>
            The <b>ionic conference app</b> is a practical preview of the ionic
            framework in action, and a demonstration of proper code use.
          </p>
        </div>
      </ion-slide>

      <ion-slide>
        <img :src="require('./img/slide-2.png')" />
        <h2>What is Ionic?</h2>
        <p>
          <b>Ionic Framework</b> is an open source SDK that enables developers
          to build high quality mobile apps with web technologies like HTML,
          CSS, and JavaScript.
        </p>
      </ion-slide>

      <ion-slide>
        <img :src="require('./img/slide-4.png')" />
        <h2>Ready to Play?</h2>
        <ion-button fill="clear" @click="setWelcomeMessagePassed">
          Continue
          <ion-icon slot="end" :icon="arrowForward" />
        </ion-button>
      </ion-slide>
    </ion-slides>
  </ion-content>
</template>

<script>
import { arrowForward } from 'ionicons/icons';

export default {
  data() {
    return {
      arrowForward
    };
  },

  methods: {
    setWelcomeMessagePassed() {
      this.$store.commit('welcomeMessagePassed');
    }
  }
};
</script>

<style lang="scss" src="./slide-item.scss" scoped />
