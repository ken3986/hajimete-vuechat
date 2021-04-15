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
  getTest(state, testMessage) {
    state.test = testMessage;
  },
  setMessage(state, message) {
    state.messages.push(message);
  },

  getChannels(state, channels) {
    state.channels = channels;
  },

  setMessages(state, messages) {
    state.messages = messages;
  }
}

const get_message_path = cname => `http://localhost:9000/.netlify/functions/express/channels/${cname}/messages`;

const fetchGetMessages = async(cname) => {
  const result = await axios.get(get_message_path(cname));
  const messages = result.data.messages;
  return messages;
}

const actions = {
  getTest(context) {
    context.commit('getTest', 'testtest');
  },

  setMessage (context, message) {
    context.commit('setMessage', message);
  },

  async getChannels(context) {
    const result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/channels');
    const channels = result.data.channels;
    context.commit('getChannels', channels);
  },

  async getMessages(context, cname) {
    const messages = await fetchGetMessages(cname);
    context.commit('setMessages', messages);
  },

  // async postMessage(context, message) {
  //   await axios.post('')
  // }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
