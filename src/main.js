import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false

// 読み込んでいる.envファイルの確認
console.log(process.env.VUE_APP_ENV_FILE_KIND);

// ElementUIライブラリを導入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ja';

Vue.use(ElementUI, {locale});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
