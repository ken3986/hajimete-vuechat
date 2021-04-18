import {
  GET_CHANNELS
} from '../../store/mutation-types';

import {
  mapGetters,
  mapActions
 } from 'vuex';

//  子コンポーネント
import MessageList from '../MessageList'

export default {
  components: {
    'message-list': MessageList,
  },

  data() {
    return {
      input_message: ''
    }
  },

  computed: {
    ...mapGetters([
      'messages',
      'channels',
    ]),
  },

  mounted() {
    this.GET_CHANNELS();
    this.GET_MESSAGES(this.$route.params.cname);
    this.getTest();
  },

  methods: {
    ...mapActions([
      GET_CHANNELS,
      'GET_MESSAGES',
      'POST_MESSAGE',
      'getTest',
    ]),

    async sendMessage() {
      this.POST_MESSAGE({"cname": this.$route.params.cname, "message": this.input_message});
      this.input_message = '';
    }

  },/* methods */

  watch: {
    $route() {
      this.GET_MESSAGES(this.$route.params.cname);
    }
  }
}
