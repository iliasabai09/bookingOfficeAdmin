import {createApp} from 'vue'
import './style.scss'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import {PRIME_VUE_CONFIG} from "../primevue.config.ts";
import {router} from "./router/router.ts";
import DialogService from 'primevue/dialogservice';
import {ToastService} from "primevue";
import {ConfirmationService} from "primevue";

createApp(App)
    .use(router)
    .use(PrimeVue, PRIME_VUE_CONFIG)
    .use(DialogService)
    .use(ToastService)
    .use(ConfirmationService)
    .mount('#app')
