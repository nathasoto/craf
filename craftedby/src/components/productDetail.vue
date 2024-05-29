<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useFetch } from '@vueuse/core';
import { useCartStore } from '../stores/cartStore.js';
import { ref } from 'vue';

// Get the current route and router instances
const route = useRoute();
const router = useRouter();
// Extract the product ID from the route parameters
const productId = route.params.id;

// Fetch the product data from the API using the product ID
const { data: product } = useFetch(`https://fakestoreapi.com/products/${productId}`).json();

// Initialize the quantity ref with a default value of 1
const quantity = ref(1);

// Function to increment the quantity
const incrementQuantity = () => {
  quantity.value++;
};

// Function to decrement the quantity, ensuring it doesn't go below 1
const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Get the cart store instance
const cartStore = useCartStore();

// Function to add the product to the cart
const addToCart = () => {
  cartStore.addToCart({
    id: product.value.id,
    title: product.value.title,
    price: product.value.price,
    quantity: quantity.value,
    image: product.value.image
  });
};
</script>

<template>
  <!-- Main container for the product details page -->
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <!-- Left side: Product image -->
        <div class="p-4">
          <img :src="product.image" alt="Product Image" class="h-96 object-contain" v-if="product">
        </div>
        <!-- Right side: Product details -->
        <div class="p-4">
          <h3 class="text-lg font-semibold leading-6 text-gray-900" v-if="product">{{ product.title }}</h3>
          <p class="text-lg font-semibold text-gray-900 mb-4" v-if="product">{{ product.price }}</p>
          <!-- Quantity selection -->
          <div class="flex items-center mb-4">
            <label for="quantity" class="mr-2">Quantity:</label>
            <div class="flex items-center">
              <!-- Button to decrement quantity -->
              <button @click="decrementQuantity" class="px-2 py-1 bg-gray-200 text-gray-700 rounded-l-md focus:outline-none">
                -
              </button>
              <!-- Quantity input field (read-only) -->
              <input type="text" id="quantity" :value="quantity" class="w-16 border-gray-300 rounded-none text-center focus:ring-blue-500 focus:border-blue-500" readonly>
              <!-- Button to increment quantity -->
              <button @click="incrementQuantity" class="px-2 py-1 bg-gray-200 text-gray-700 rounded-r-md focus:outline-none">
                +
              </button>
            </div>
          </div>
          <!-- Button to add the product to the cart -->
          <button @click="addToCart" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ajouter au panier
          </button>
        </div>
      </div>
      <!-- Product description section -->
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="sm:flex sm:space-x-4 sm:px-6 sm:py-4">
            <dt class="text-sm font-medium text-gray-500 sm:w-1/3">Histoire de création</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:w-2/3" v-if="product">{{ product.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for the product details page */
</style>
