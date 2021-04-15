<template>
  <div>
    <p>chat.index.vue</p>
    <ul>
      <li v-for="channel in channels" :key="channel">
        {{ channel }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      channels: [],
    }
  },

  mounted() {
    this.getData();
    this.getChannels();
  },

  methods: {
    async getData() {
      // const result = await axios.get();
      // console.log(result);
    },

    async getChannels () {
      const results = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/channels');
      console.log(results.data.channels);
      this.channels = results.data.channels;
    }
  }
}

</script>
