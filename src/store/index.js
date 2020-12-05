import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarPcClose: false,
    sidebarmbClose: true,
    bodyWidth: 0,
    smWidth: 576
  },
  mutations: {
    SIDEBARCOLLAPSE(state) {
      if (state.bodyWidth > state.smWidth) {
        state.sidebarPcClose = !state.sidebarPcClose;
      } else {
        state.sidebarmbClose = !state.sidebarmbClose;
      }
    },
    GETBODYWIDTH(state) {
      const item = document.querySelector("body");
      state.bodyWidth = item.clientWidth;
    }
  },
  actions: {
    sidebarCollapse(context) {
      context.commit("GETBODYWIDTH");
      context.commit("SIDEBARCOLLAPSE");
    }
  },
  modules: {}
});
