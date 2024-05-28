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
      <router-link to="/login" class="text-gray-600 hover:text-red-600 focus:outline-none">
      <button>
          <IconUser class="w-6 h-6" />
        </button>
      </router-link>
      <router-link to="/cart" class="relative text-gray-600 hover:text-red-600 focus:outline-none">
        <button class="text-gray-600 hover:text-red-600 focus:outline-none">
          <IconShoppingCart class="w-6 h-6" />
          <span v-if="totalItems > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            {{ totalItems }}
          </span>
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
  import { useCartStore } from '../stores/cartStore.js';
  import { IconSearch, IconUser, IconShoppingCart  } from '@tabler/icons-vue'
  import { computed } from 'vue'

  const cartStore = useCartStore();
  const totalItems = computed(() => cartStore.totalItems);

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
