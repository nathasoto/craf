import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    // Initialize the user token and username from localStorage, if available
    token: localStorage.getItem('userToken') || null,
    error: null,
    username: localStorage.getItem('username') || null,
  }),
  actions: {
    // Action to log in a user
    async loginUser({ username, password }) {
      try {
        // Send a login request to the server
        const response = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        // Parse the response
        const data = await response.json();

        // If the login request is successful
        if (response.ok) {
          // Save the user token and username in localStorage
          localStorage.setItem('userToken', data.token);
          localStorage.setItem('username', username);

          // Update the store state with the user token and username
          this.token = data.token;
          this.error = null;
          this.username = username;
        } else {
          // If the login request fails, throw an error
          throw new Error(data.message || 'Login failed');
        }
      } catch (error) {
        // Handle errors during login
        console.error('Login error:', error);
        this.error = error.message || 'An error occurred while logging in';
      }
    },
    // Other action methods here...
  },
});