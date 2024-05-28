<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const prenom = ref('');
const nom = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isRegistered = ref(false);
const errorMessage = ref('');
const router = useRouter();

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Les mots de passe ne correspondent pas';
    return;
  }
  isRegistered.value = true;
  errorMessage.value = '';

  // Redirigir a la página de login después de un breve retraso
  setTimeout(() => {
    router.push('/login');
  }, 2000); // 2 segundos de retraso antes de la redirección
};

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <form @submit.prevent="handleRegister" v-if="!isRegistered">
        <div class="mb-4">
          <label for="prenom" class="block text-gray-700">Prénom</label>
          <input type="text" id="prenom" v-model="prenom" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="nom" class="block text-gray-700">Nom</label>
          <input type="text" id="nom" v-model="nom" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" v-model="email" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Mot de passe</label>
          <input type="password" id="password" v-model="password" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="confirmPassword" class="block text-gray-700">Confirmation de mot de passe</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required class="w-full px-3 py-2 border rounded" />
        </div>
        <div v-if="errorMessage" class="mb-4 text-red-500">
          {{ errorMessage }}
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded">Créer un compte</button>
      </form>
      <div v-else class="text-center">
        <p class="text-xl text-green-500">Compte créé avec succès! Redirection vers la page de login......</p>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>