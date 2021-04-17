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
  // setMessage(state, message) {
  //   state.messages.push(message);
  // },

  getChannels(state, channels) {
    state.channels = channels;
  },

  setMessages(state, messages) {
    state.messages = messages;
  }
}

// const get_message_path = cname => `http://localhost:9000/.netlify/functions/express/channels/${cname}/messages`;
// const get_message_path = cname => `https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/channels/${cname}/messages`;
// require('dotenv').config({path: __dirname + '/.env'});

const get_message_path = cname => process.env.VUE_APP_API_URL + `/channels/${cname}/messages`;

const fetchGetMessages = async(cname) => {
  const result = await axios.get(get_message_path(cname));
  const messages = result.data.messages;
  return messages;
}

const actions = {
  getTest(context) {
    context.commit('getTest', 'testtest');
  },

  // setMessage (context, message) {
  //   context.commit('setMessage', message);
  // },

  async getChannels(context) {
    const result = await axios.get(process.env.VUE_APP_API_URL + '/channels');
    const channels = result.data.channels;
    context.commit('getChannels', channels);
  },

  async getMessages(context, cname) {
    const messages = await fetchGetMessages(cname);
    context.commit('setMessages', messages);
  },

  async postMessage(context, {cname, message}) {
    const result = await axios.post(get_message_path(cname), {
      'body': message
    });
    if(result.status == 201) {
      const messages = await fetchGetMessages(cname);
      context.commit('setMessages', messages);
    }
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
