import {
  mapGetters,
  mapActions
 } from 'vuex';

export default {
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
      'setMessage',
      'getChannels',
      'getMessages',
      'getTest',
    ]),

    async getData() {
      // const result = await axios.get();
      // console.log(result);
    },

    async sendMessage () {
      // this.messages.push(this.input_message);
      this.setMessage(this.input_message);
      this.input_message = '';
    }

  },/* methods */

  watch: {
    $route() {
      this.getMessages(this.$route.params.cname);
    }
  }
}
