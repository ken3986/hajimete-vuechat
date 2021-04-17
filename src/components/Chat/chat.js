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
    this.getData();
    this.getChannels();
    this.getMessages(this.$route.params.cname);
    this.getTest();
  },

  methods: {
    ...mapActions([
      // 'setMessage',
      'getChannels',
      'getMessages',
      'postMessage',
      'getTest',
    ]),

    async getData() {
      // const result = await axios.get();
      // console.log(result);
    },

    async sendMessage() {
      // this.messages.push(this.input_message);
      this.postMessage({"cname": this.$route.params.cname, "message": this.input_message});
      this.input_message = '';
    }

  },/* methods */

  watch: {
    $route() {
      this.getMessages(this.$route.params.cname);
    }
  }
}
