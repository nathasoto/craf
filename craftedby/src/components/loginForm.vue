<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  if (name.value === 'natha' && password.value === '1234') {
    localStorage.setItem('userName', name.value);
    router.push('/account');
  } else {
    alert('Nom d\'utilisateur ou mot de passe incorrect');
  }
};

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="name" class="block text-gray-700">Nom</label>
          <input type="text" id="name" v-model="name" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Mot de passe</label>
          <input type="password" id="password" v-model="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Se connecter</button>
      </form>
    </div>
  </div>

</template>

<style scoped>

</style>