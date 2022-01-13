import { createStore } from 'vuex';
export default createStore({
  state: {
    welcomeMessage: false
  },
  mutations: {
    welcomeMessagePassed(state) {
      localStorage.setItem('welcomeMessage', true);
      state.welcomeMessage = true;
    },

    initialiseStore(state) {
      if (localStorage.getItem('welcomeMessage')) {
        state.welcomeMessage = true;
      }
    }
  }
});
