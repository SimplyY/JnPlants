import App from './components/App.vue'

import VueAsyncData from 'vue-async-data'

Vue.use(VueAsyncData);
new Vue({
    el: 'body',
    components: {
        // include the required component
        // in the options
        app: App
    }
})
