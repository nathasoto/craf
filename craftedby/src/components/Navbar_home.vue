<template>
  <nav class="bg-custom-color p-4 flex justify-between items-center">
    <!-- Logo de la empresa en el centro -->
    <div class="flex-grow flex justify-center">
      <img src="@/assets/logo.png" alt="Logo" >
    </div>
    <div class="flex space-x-4">
      <button class="text-gray-600 hover:text-red-600 focus:outline-none">
        <IconSearch  class="w-6 h-6"/>
      </button>
      <router-link to="/create_account" class="text-gray-600 hover:text-red-600 focus:outline-none">
        <button>
          <IconUser class="w-6 h-6" />
        </button>
      </router-link>
      <button class="text-gray-600 hover:text-red-600 focus:outline-none">
        <IconShoppingCart class="w-6 h-6" />
      </button>
    </div>
  </nav>

  <nav class="bg-custom-color p-2 flex justify-center space-x-40">
    <a href="/e-boutique" class="text-lg text-gray-600 hover:text-red-600 font-sacramento">e-boutique</a>
    <a href="/blog-artisan" class="text-lg text-gray-600 hover:text-red-600 font-sacramento">blog artisan</a>
  </nav>

</template>

<script setup>
  import { IconSearch, IconUser, IconShoppingCart  } from '@tabler/icons-vue'
  import { RouterLink } from 'vue-router'


</script>

<style scoped>

  .bg-custom-color {
    background-color: #FCFCFC;
  }
  .font-sacramento {
    font-family: 'Sacramento', cursive;
    font-size: 35px;
  }
  img{
    width: 500px;
    height: 100px;
  }

</style>
