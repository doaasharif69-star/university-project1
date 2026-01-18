<script setup>
    import { auth} from '@/firebase/config';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    
        
        const email = ref('');
        const password = ref('');
        const router = useRouter();
        const errormesage = ref('');
        const login = async () => {
            errormesage.value = ''

          if (!email.value){
                errormesage.value = "Email is required";
                return;
            }

              if (!password.value){
                errormesage.value = "Password is required";
                return;
            }
            try {
                await signInWithEmailAndPassword(auth, email.value, password.value);
            router.push('/home')
             } catch (error) {
                errormesage.value = error.message;
            }
        }

</script>



<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form @submit.prevent="login" class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />
    </div>
    <div class="mt-6 flex h-12 w-full items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-transparent pl-5 focus-within:border-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock text-gray-400" aria-hidden="true" >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <input
            placeholder="Password"
            class="h-full w-full bg-transparent text-sm placeholder-gray-400 outline-none"
            type="password"
            v-model="password"
        />
    </div>
    <div class="mt-8 flex w-full items-center justify-between">
        <label class="flex cursor-pointer items-center gap-2">
            <input class="peer hidden" type="checkbox" checked="" />
            <span class="relative flex size-4.5 items-center justify-center rounded border border-slate-300 peer-checked:border-gray-800 peer-checked:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check size-3 text-white" aria-hidden="true" >
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            </span>
            <span class="text-gray-500 select-none">Remember me</span>
        </label>
        <a class="text-gray-800 underline" href="#">
            Forgot password?
        </a>
        <p v-if="errormesage" class="text-red-500">
        {{ errormesage }}
    </p>
    </div>
    <button type="submit" class="mt-8 h-11 w-full cursor-pointer rounded-full bg-linear-to-b from-gray-600 to-gray-800 text-white transition hover:from-gray-700 hover:to-gray-900" >
        Login
    </button>
    <p class="mt-4 text-gray-500/90">
        Don’t have an account?
        <a class="text-gray-800 underline" href="#">
            Sign up
        </a>
    </p>
</form>
</div>
</template>



<style scoped>

</style>