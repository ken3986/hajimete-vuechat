import {
  SET_MESSAGES,
  GET_CHANNELS,
} from './mutation-types';

const mutations = {
  getTest(state, testMessage) {
    state.test = testMessage;
  },

  [GET_CHANNELS](state, channels) {
    state.channels = channels;
  },

  [SET_MESSAGES](state, messages) {
    state.messages = messages;
  }
}

export default mutations;
