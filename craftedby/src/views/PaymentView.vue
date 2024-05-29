<script setup>
import Navbar_home from '@/components/navbarHome.vue'
import Footer_home from '@/components/footerHome.vue'
import PaymentForm from '@/components/paymentForm.vue'


const userName = localStorage.getItem('userName');

</script>

<template>
  <body>
  <header>
    <Navbar_home />

  </header>

  <main >
  <PaymentForm />



  </main>

  <footer>
    <Footer_home />
  </footer>
  </body>
</template>