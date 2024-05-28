<script setup>
import Navbar_home from '@/components/navbar_home.vue'
import Footer_home from '@/components/footer_home.vue'
import Product from '@/components/product.vue'

</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main>
    <Product />
  </main>


  <footer>
    <Footer_home />
  </footer>
  </body>
</template>