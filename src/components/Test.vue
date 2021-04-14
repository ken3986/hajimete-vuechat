<template>
  <div>
    <p>Test page</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {

    }
  },

  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      // const result = await axios.get('https://netlify-cors-test-ken3986.netlify.app/.netlify/functions/app');
      let result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/app');
      console.log(result);
      result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express');
      console.log(result);
      result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/test');
      console.log(result);

    }
  }
}
</script>
