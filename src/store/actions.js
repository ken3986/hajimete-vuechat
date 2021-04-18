import axios from 'axios';
import {
  GET_CHANNELS,
  SET_MESSAGES
} from './mutation-types';

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

  // チャンネルの取得
  async [GET_CHANNELS](context) {
    const result = await axios.get(process.env.VUE_APP_API_URL + '/channels');
    const channels = result.data.channels;
    context.commit(GET_CHANNELS, channels);
  },

  // メッセージの取得
  async GET_MESSAGES(context, cname) {
    const messages = await fetchGetMessages(cname);
    context.commit(SET_MESSAGES, messages);
  },

  // メッセージの送信
  async POST_MESSAGE(context, {cname, message}) {
    const result = await axios.post(get_message_path(cname), {
      'body': message
    });
    if(result.status == 201) {
      const messages = await fetchGetMessages(cname);
      context.commit(SET_MESSAGES, messages);
    }
  }
}

export default actions;
