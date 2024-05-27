<template>
  <nav class="bg-custom-color p-4 flex justify-between items-center">

    <div class="flex-grow flex justify-center">
      <a href="/">
        <img src="@/assets/logo.png" alt="Logo">
      </a>
    </div>
    <div class="flex space-x-4">
      <button class="text-gray-600 hover:text-red-600 focus:outline-none">
        <IconSearch  class="w-6 h-6"/>
      </button>
      <router-link to="/sign_up" class="text-gray-600 hover:text-red-600 focus:outline-none">
      <button>
          <IconUser class="w-6 h-6" />
        </button>
      </router-link>
      <router-link to="/sign_up" class="text-gray-600 hover:text-red-600 focus:outline-none">
      <button class="text-gray-600 hover:text-red-600 focus:outline-none">
        <IconShoppingCart class="w-6 h-6" />
      </button>
      </router-link>
    </div>
  </nav>

  <nav class="bg-custom-color p-5 flex flex-col md:flex-row justify-center md:space-x-60">
    <a href="/e-boutique" class="text-lg text-gray-600 hover:text-red-600 font-sacramento">e-boutique</a>
    <a href="/blog-artisan" class="text-lg text-gray-600 hover:text-red-600 font-sacramento">blog artisan</a>
  </nav>

</template>

<script setup>
  import { IconSearch, IconUser, IconShoppingCart  } from '@tabler/icons-vue'

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
