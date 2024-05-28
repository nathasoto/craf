<script setup>
import { useCartStore } from '../stores/cartStore.js';
import { useRouter  } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();
const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
};

const clearCart = () => {
  cartStore.clearCart();
};

const checkout = () => {
  // Aquí puedes agregar la lógica para el proceso de compra
  alert('Processo de compra no implementado.');
};
const continueShopping = () => {
  router.push('/e-boutique');

};

</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
    <h2 class="text-2xl font-bold mb-6">Votre Panier</h2>
    <div v-if="cartStore.items.length > 0" class="bg-white shadow overflow-hidden sm:rounded-lg">
      <!-- Lista de productos en el carrito -->
      <ul class="divide-y divide-gray-200">
        <li v-for="item in cartStore.items" :key="item.id" class="py-4 flex items-center">
          <!-- Imagen del producto -->
          <div class="h-20 w-20 rounded-full overflow-hidden flex items-center justify-center">
            <img :src="item.image" alt="Product Image" class="h-12 w-12 object-cover">
          </div>
          <!-- Detalles del producto -->
          <div class="flex-1 ml-4">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-gray-500">{{ item.price }}$ x {{ item.quantity }}</p>
          </div>
          <!-- Botón para eliminar el producto del carrito -->
          <div class="flex flex-col justify-between">
            <button @click="removeFromCart(item.id)" class="text-red-600 hover:text-red-800">Supprimer</button>
          </div>
        </li>
      </ul>
      <!-- Total del carrito y botones de acción -->
      <div class="border-t border-gray-200 px-4 py-4 sm:px-6">
        <p class="text-lg font-semibold">Total: {{ cartStore.totalPrice }}$</p>
        <div class="flex justify-end mt-4">
          <button @click="clearCart" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Vider le Panier
          </button>
          <button @click="checkout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Acheter
          </button>
          <!-- Botón para continuar comprando -->
          <button @click="continueShopping" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Continuer vos achats
          </button>
        </div>
      </div>
    </div>
    <!-- Mensaje cuando el carrito está vacío -->
    <div v-else class="bg-white shadow overflow-hidden sm:rounded-lg p-4">
      <p class="text-lg">Votre panier est vide.</p>
    </div>
  </div>
</template>

<style scoped>

</style>