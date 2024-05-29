<script setup>
import { useFetch } from '@vueuse/core'

// Fetch the products from the API and store them in the products variable
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
</script>

<template>
  <!-- Product list -->
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Loop through each product and create a router link to its detail page -->
    <router-link v-for="product in products" :key="product.id" :to="'/ProductDetail/' + product.id">
      <!-- Product card -->
      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
        <!-- Product image -->
        <img class="h-40 w-40 mx-auto my-auto p-5" :src="product.image" alt="Product Image" />
        <div class="p-6">
          <!-- Product title -->
          <h3 class="text-lg font-semibold text-gray-900">{{ product.title }}</h3>
          <!-- Product description -->
          <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
          <!-- Product price -->
          <p class="mt-2 text-lg font-semibold text-gray-900 text-center mx-auto">{{ product.price }}$</p>
        </div>
      </li>
    </router-link>
  </ul>
</template>

<style scoped>
/* Scoped styles for the product list */
</style>
