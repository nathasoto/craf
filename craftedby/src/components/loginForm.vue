<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/UserStore.js'; // Adjust the path as per your project structure
import { useRouter } from 'vue-router';

// Define reactive variables for the username and password
const username= ref('');
const password = ref('');
const router = useRouter();


// Function to handle the login process
const handleLogin = async () => {
  try {
    await useUserStore().loginUser({ username: username.value, password: password.value });

    // Redirect to the account page upon successful login
    router.push('/account');
  } catch (error) {
    // Show an alert if there's an error during login
    alert(error.message || 'An error occurred while logging in');
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <!-- Login form -->
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <!-- Label and input for the username -->
          <label for="name" class="block text-gray-700">Username</label>
          <input type="text" id="name" v-model="username" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <!-- Label and input for the password -->
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" v-model="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <!-- Submit button for the login form -->
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Styles for the login page */
</style>