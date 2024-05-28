import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] // Array para almacenar los productos en el carrito
  }),
  getters: {
    // Cantidad total de productos en el carrito
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    // Precio total del carrito
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
  },
  actions: {
    // Añadir un producto al carrito
    addToCart(product) {
      const existingProduct = this.items.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        this.items.push(product);
      }
    },
    // Eliminar un producto del carrito
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
    },
    // Limpiar todo el carrito
    clearCart() {
      this.items = [];
    }
  }
});