import { defineStore } from 'pinia';


export const useCartStore = defineStore({
  id: 'cart',
  state: () => {
    const storedData = JSON.parse(localStorage.getItem('cartItems'));
    const expirationTime = localStorage.getItem('cartItemsExpiration');

    // Verificar si los datos del carrito han expirado
    if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
      // Si han expirado, eliminar los datos del carrito
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartItemsExpiration');
      return {
        items: []
      };
    }

    return {
      items: storedData || [] // Inicializa el carrito con los datos almacenados en localStorage, si existen
    };
  },
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
      // Actualiza el carrito en localStorage y establece la fecha de expiración
      this.saveCartToLocalStorage();
    },
    // Eliminar un producto del carrito
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId);
      // Actualiza el carrito en localStorage y establece la fecha de expiración
      this.saveCartToLocalStorage();
    },
    // Limpiar todo el carrito
    clearCart() {
      this.items = [];
      // Elimina los datos del carrito y la fecha de expiración del localStorage
      localStorage.removeItem('cartItems');
      localStorage.removeItem('cartItemsExpiration');
    },
    // Guardar el carrito en localStorage y establecer la fecha de expiración
    saveCartToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
      // Establecer una fecha de expiración para los datos del carrito (3 horas desde ahora)
      // const expirationTime = new Date().getTime() + 3 * 60 * 60 * 1000; // 3 horas en milisegundos
      const expirationTime = new Date().getTime() + 1 * 60 * 1000; // 1 minuto en milisegundos
      localStorage.setItem('cartItemsExpiration', expirationTime.toString());
    }
  }
});
