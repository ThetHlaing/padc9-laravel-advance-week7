/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
const VueCookie = require("vue-cookie");
window.Vue = require('vue');
window.Vue.use(VueCookie)


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('form-group', require('./components/FormGroup.vue').default);

Vue.component('radio-item', require('./components/RadioItem.vue').default);

Vue.component('text-input', require('./components/TextInput.vue').default);

Vue.component('textarea-input', require('./components/TextareaInput.vue').default);

Vue.component('categories-select', require('./components/CategoriesSelect.vue').default);

Vue.component('post-list', require('./components/PostList.vue').default);

Vue.component('login-form', require('./components/LoginForm.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import api_token_header from './components/mixins/api_token_header_for_axios';
Vue.mixin(api_token_header);

const app = new Vue({
    el: '#app',
});



