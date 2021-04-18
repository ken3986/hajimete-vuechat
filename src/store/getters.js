const getters = {
  messages (state) {
    return state.messages.reverse();
  },
  channels (state) {
    return state.channels;
  }
}

export default getters;
