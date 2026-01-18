import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config'
const app = createApp(App);

app.use(router);

let appMounted = false;

onAuthStateChanged(auth, () => {
  if (!appMounted) {
    app.mount('#app');
    appMounted = true;
  }
});



