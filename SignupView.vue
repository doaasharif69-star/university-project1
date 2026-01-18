<script setup>
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { auth} from '@/firebase/config';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    
        const router = useRouter();
        const email = ref("");
        const password = ref("");
        const confirmPassword = ref("");
        const errormesage = ref("");
        const signup = async () => {
            errormesage.value = ''

            if (!email.value){
                errormesage.value = "Email is required";
                return;
            }

              if (!password.value){
                errormesage.value = "Password is required";
                return;
            }

            if (password.value.length < 6){
                errormesage.value = "Password must be at least 6 characters long";
                return;
            }
            if (password.value !== confirmPassword.value){
                errormesage.value = "Passwords do not match";
                return;
            }
            


     try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push('/home');
  } catch (error) {
    errormesage.value = error.message;
  }
}
</script>





<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form @submit.prevent="signup"class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          v-model="email"
          placeholder="Enter your email"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
            v-model="password"
          placeholder="Enter your password"/>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password"
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm your password"/>
      </div>
      <div>
        <div class="text-red-500">
        {{ errormesage }}
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </div>
    </form>
  </div>
</template>




<style scoped>
  
</style>