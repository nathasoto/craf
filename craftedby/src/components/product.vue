<script setup>
import { useFetch } from '@vueuse/core'
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()

</script>

<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <router-link v-for="product in products" :key="product.id" :to="'/ProductDetail/' + product.id">
      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
        <img class="h-40 w-40 mx-auto my-auto p-5 " :src="product.image" alt="" />
        <div class="p-6">
          <h3 class="text-lg font-semibold text-gray-900">{{ product.title }}</h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
          <p class="mt-2 text-lg font-semibold text-gray-900 text-center mx-auto">{{ product.price }}$</p>
        </div>
      </li>
    </router-link>
  </ul>
</template>

<style scoped>

</style>