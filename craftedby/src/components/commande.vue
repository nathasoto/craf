<script setup>
import { useCartStore } from '../stores/cartStore.js';
import { useAddressStore } from '../stores/AddressStore.js';

// Initialize the stores
const addressStore = useAddressStore()
const cartStore = useCartStore()

</script>

<template>
  <div class="flex justify-center items-center h-full">
    <div class="commande-container border border-gray-300 p-6 max-w-lg">
      <h1 class="text-3xl font-semibold mb-4">Commande</h1>

      <!-- Display Address Information -->
      <div class="address-info mb-6">
        <h2 class="text-xl font-semibold mb-2">Address Information</h2>
        <p><strong>Address:</strong> {{ addressStore.address }}</p>
        <p><strong>City:</strong> {{ addressStore.city }}</p>
        <p><strong>Postal Code:</strong> {{ addressStore.postalCode }}</p>
        <p><strong>Country:</strong> {{ addressStore.country }}</p>
        <p><strong>Phone:</strong> {{ addressStore.phone }}</p>
      </div>

      <!-- Display Cart Information -->
      <div class="cart-info">
        <h2 class="text-xl font-semibold mb-2">Cart Information</h2>
        <ul>
          <li v-for="item in cartStore.items" :key="item.id" class="mb-2">
            <span class="font-semibold">{{ item.title }}</span> --- {{ item.quantity }} x ${{ item.price }}
          </li>
        </ul>
        <p class="font-semibold">Total Items: {{ cartStore.totalItems }}</p>
        <p class="font-semibold">Total Price: ${{ cartStore.totalPrice }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>