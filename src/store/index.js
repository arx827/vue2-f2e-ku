import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarClose: false
  },
  mutations: {
    SIDEBARCOLLAPSE(state) {
      state.sidebarClose = !state.sidebarClose;
    }
  },
  actions: {
    sidebarCollapse(context) {
      context.commit("SIDEBARCOLLAPSE");
    }
  },
  modules: {}
});
