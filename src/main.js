import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import filters from './helpers/filters';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faCartShopping, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faCartShopping, faCartPlus, faTrashCan);

const app = createApp(App);

app.config.globalProperties.$filters = filters;
app
	.use(router)
	.use(store)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
