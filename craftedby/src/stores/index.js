import { createStore } from 'vuex';

export default createStore({
  state: {
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }, credentials) {
      // Aquí realizarías la lógica de autenticación, como enviar una solicitud al servidor
      // Si la autenticación es exitosa, actualiza el estado del usuario
      commit('setUser', credentials.username);
    },
    logout({ commit }) {
      // Aquí realizarías la lógica de cierre de sesión, como eliminar el token de sesión
      // y luego actualiza el estado del usuario
      commit('logout');
    }
  }
});