<script setup>
import { watchEffect } from 'vue'
import Navbar_home from '@/components/navbar/navbarHome.vue'
import Footer_home from '@/components/footerHome.vue'
import { useUserStore } from '../stores/UserStore.js';
import Product from '@/components/product.vue'


const userStore = useUserStore();
let userName = userStore.username;
let token = userStore.token; // Obtain the token from the userStore

// Watch for changes in userStore.username and update userName
watchEffect(() => {
  userName = userStore.username;
  token = userStore.token; // Update the token value when it changes
});

</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main class="p-4">
    <h1 class="text-2xl mb-4">Bienvenue, {{ userName}}!</h1>
<!--    <p>Your token: {{ token }}</p> &lt;!&ndash; Display the token &ndash;&gt;-->
     <Product />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>