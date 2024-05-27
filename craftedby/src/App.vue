<template>
  <div class="container">
    <!-- Navbar -->
    <div>
      <Navbar />
    </div>

    <!-- Body -->
    <div class="body">

    </div>

    <!-- Footer -->
    <div>
      <Footer />
    </div>
  </div>

</template>

<script setup>

  import Navbar from './components/Navbar_home.vue'
  import Footer from './components/Footer_home.vue'
  // import Footer from './components/Footer_all.vue'

</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

}

.body {
  flex-grow: 1;

}
</style>
