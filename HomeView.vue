<script setup>
    import {auth} from '@/firebase/config'
    import { useRouter} from 'vue-router'
    import { signOut } from 'firebase/auth'
    const router = useRouter()
    const logout = async () => {
      try{
        await signOut(auth)
        router.push('/login')
      } catch (error){
        console.log(error.message)
      }
    }
</script>


<template>
  <div>
    <p>welcome:{{ auth.currentUser?.email }}</p>
  </div>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      <h1 class="text-3xl font-bold mb-4 text-gray-800">Welcome to the University Web Project</h1>
      <p class="text-gray-600 mb-6">This is the home page. Navigate to login or signup to get started.</p>
      <div class="space-x-4">
        <router-link to="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </router-link>
        <router-link to="/signup" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>