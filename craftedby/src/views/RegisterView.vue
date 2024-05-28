<script setup>
import Navbar_home from '@/components/navbar_home.vue'
import Footer_home from '@/components/footer_home.vue'
import registerForm from '@/components/registerForm.vue'
</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
    <registerForm />
  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>