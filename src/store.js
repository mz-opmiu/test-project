import Vue from 'vue';
import Vuex from 'vuex';

// import mimastickStore from '@/mimaskstick/store'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // mimastickStore
  },
  state: {
    currentPop: '',
    isLoading: false
  },
  actions: {},
  mutations: {
    openPop(state, popName) {
      state.dimm = true;
      setTimeout(() => {
        state.currentPop = popName;
        const scrollTop = $(window).scrollTop();
        setTimeout(() => {
          $('.popup').css('top', scrollTop);
        }, 50);
      }, 200);
    },
    closePop(state) {
      state.currentPop = '';
      setTimeout(() => {
        state.dimm = false;
      }, 200);
    },
    loading(state, data) {
      state.isLoading = data;
    }
  },
  actions: {}
});
