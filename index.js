import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import HomeView from '@/views/HomeView.vue'
import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'login',
      path: '/login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignupView,
      meta: {
        requiresAuth: false
      }
    },
    {
      name: 'home',
      path: '/home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  
  const user = auth.currentUser;

        if ( to.meta.requiresAuth && !user ) {
          next({ name: 'login' });
        } else {
          next();
        }
    }


  );

export default router
