<script setup>
import { useFetch } from '@vueuse/core'

// Fetch the products from the API and store them in the products variable
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
</script>

<template>
<!--  &lt;!&ndash; Product list &ndash;&gt;-->
<!--  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">-->
<!--    &lt;!&ndash; Loop through each product and create a router link to its detail page &ndash;&gt;-->
<!--    <router-link v-for="product in products" :key="product.id" :to="'/ProductDetail/' + product.id">-->
<!--      &lt;!&ndash; Product card &ndash;&gt;-->
<!--      <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition duration-300">-->
<!--        &lt;!&ndash; Product image &ndash;&gt;-->
<!--        <img class="h-40 w-40 mx-auto my-auto p-5" :src="product.image" alt="Product Image" />-->
<!--        <div class="p-6">-->
<!--          &lt;!&ndash; Product title &ndash;&gt;-->
<!--          <h3 class="text-lg font-semibold text-gray-900">{{ product.title }}</h3>-->
<!--          &lt;!&ndash; Product description &ndash;&gt;-->
<!--          <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>-->
<!--          &lt;!&ndash; Product price &ndash;&gt;-->
<!--          <p class="mt-2 text-lg font-semibold text-gray-900 text-center mx-auto">{{ product.price }}$</p>-->
<!--        </div>-->
<!--      </li>-->
<!--    </router-link>-->
<!--  </ul>-->


  <div class="flex justify-center p-2">
    <div class="flex flex-wrap gap-4 justify-center p-2">
      <div v-for="product in products" :key="product.id" class="w-full md:w-1/3">
        <!-- Contenido de la tarjeta de producto -->
        <router-link :to="'/ProductDetail/' + product.id">
          <!-- Product card -->
          <div class="p-4 border rounded-lg shadow-md">
            <!-- Product image -->
            <img class="h-40 w-40 mx-auto my-auto p-5" :src="product.image" alt="Product Image" />
            <div class="p-6">
              <!-- Product title -->
              <div class="title-container w-full">
                <h3 class="text-lg font-semibold text-gray-900">
                  {{ product.title.substring(0, 50) }}..
                </h3>
              </div>
              <!-- Product description -->
              <div class="description-container h-20 w-full">
                <p class="mt-1 text-sm text-gray-500">
                  {{ product.description.substring(0, 200) }}
                </p>
              </div>
              <!-- Product price -->
              <p class="mt-2 text-lg font-semibold text-gray-900 text-center mx-auto">{{ product.price }}$</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>

<!--  <router-link :to="'/ProductDetail/' + product.id">-->
<!--    &lt;!&ndash; Product card &ndash;&gt;-->
<!--    <div class="p-4 border rounded-lg shadow-md">-->
<!--      &lt;!&ndash; Product image &ndash;&gt;-->
<!--      <img class="h-40 w-40 mx-auto my-auto p-5" :src="product.image" alt="Product Image" />-->
<!--      <div class="p-6">-->
<!--        &lt;!&ndash; Product title &ndash;&gt;-->
<!--        <h3 class="text-lg font-semibold text-gray-900">{{ product.title }}</h3>-->
<!--        &lt;!&ndash; Product description &ndash;&gt;-->
<!--        <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>-->
<!--        &lt;!&ndash; Product price &ndash;&gt;-->
<!--        <p class="mt-2 text-lg font-semibold text-gray-900 text-center mx-auto">{{ product.price }}$</p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </router-link>-->

</template>

<style scoped>
/* Scoped styles for the product list */
</style>
