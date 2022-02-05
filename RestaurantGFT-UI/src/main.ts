import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = true;

new Vue({
    render: h => h(App)
}).$mount('#app');
