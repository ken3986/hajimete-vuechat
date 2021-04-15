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
      let result = null;
      console.log(result);
      result = await axios.get('https://netlify-cors-test-ken3986.netlify.app/.netlify/functions/app');
      console.log(result);
      result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/app');
      console.log(result);
      try{
        result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express');
        console.log(result);

      } catch(err) {
        console.log(err);
      }
      result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/test');
      console.log(result);
      result = await axios.get('https://hajimete-vuechat-api-develop.netlify.app/.netlify/functions/express/users');
      console.log(result);

    }
  }
}
</script>
