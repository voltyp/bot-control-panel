import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';

const app = createApp(App)

app.component('PInputText', InputText)
app.component('PButton', Button)
app.component('PCheckbox', Checkbox)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')
