<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Define reactive variables for the username and password
const name = ref('');
const password = ref('');
const router = useRouter();

// Function to handle the login process
const handleLogin = () => {
  // Check if the username and password match predefined values
  if (name.value === 'natha' && password.value === '1234') {
    // Store the username in localStorage
    localStorage.setItem('userName', name.value);
    // Redirect to the account page
    router.push('/account');
  } else {
    // Show an alert if the username or password is incorrect
    alert('Incorrect username or password');
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
          <input type="text" id="name" v-model="name" required class="w-full px-3 py-2 border rounded" />
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
