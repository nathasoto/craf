<script setup>
import Navbar_home from '@/components/navbar_home.vue'
import Footer_home from '@/components/footer_home.vue'
import { useRoute } from 'vue-router';

const userName = localStorage.getItem('userName');

</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main class="p-4">
    <h1 class="text-2xl mb-4">Bienvenue, {{ userName }}!</h1>

  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>