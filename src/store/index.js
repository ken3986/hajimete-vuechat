import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  test: 'Hello from Vuex!',
  messages: [],
  channels: [],
}

const getters = {
  messages (state) {
    return state.messages.reverse();
  },
  channels (state) {
    return state.channels;
  }
}

const mutations = {
  setMessage (state, message) {
    state.messages.push(message);
  },

  getChannels (state, channels) {
    state.channels = channels;
  }
}

const actions = {
  setMessage (context, message) {
    context.commit('setMessage', message);
  },

  async getChannels (context) {
    const result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/channels');
    context.commit('getChannels', result);
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
