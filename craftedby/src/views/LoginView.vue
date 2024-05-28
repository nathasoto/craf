<script setup>
import Navbar_home from '@/components/navbar_home.vue'
import Footer_home from '@/components/footer_home.vue'
import LoginForm from '@/components/loginForm.vue'
</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
  <LoginForm />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>