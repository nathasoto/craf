<script setup>
import { IconBrandPinterest } from '@tabler/icons-vue';
import { IconBrandYoutube } from '@tabler/icons-vue';
import { IconBrandInstagram } from '@tabler/icons-vue';
import { IconBrandFacebook } from '@tabler/icons-vue';

</script>

<template>
  <footer class="bg-custom-color p-8">
    <div class="flex justify-between items-start">
      <div class="w-1/2 pr-8">
        <div class="mb-4 flex flex-col items-center">
          <h3 class="text-xl font-bold mb-2">DES QUESTIONS ?</h3>
          <ul class="text-gray-600 text-center">
            <li class="mb-2"><a href="#" class="hover:text-gray-800">Foire aux questions</a></li>
            <li class="mb-2"><a href="#" class="hover:text-gray-800">Politique de confidentialité</a></li>
            <li class="mb-2"><a href="#" class="hover:text-gray-800">Politique de Cookies</a></li>
            <li><a href="#" class="hover:text-gray-800">Nous contacter</a></li>
          </ul>
        </div>
        <div class="flex justify-center">
          <div class="flex space-x-4">
            <IconBrandPinterest class="w-8 h-8" />
            <IconBrandYoutube class="w-8 h-8" />
            <IconBrandInstagram class="w-8 h-8" />
            <IconBrandFacebook class="w-8 h-8" />
          </div>
        </div>
      </div>

      <div class=" bg-custom-color2 w-1/2 pl-8 p-8 rounded-lg " >
        <h3 class="text-3xl font-bold mb-3 font-sacramento">Newsletter</h3>
        <h5 class=" mb-1 font-sacramento">Subscribe to our newsletter and receive our latest news and offers!</h5>
        <form @submit.prevent="submitNewsletter" class="flex flex-col">
          <div class="flex flex-wrap items-center">
            <input type="email" v-model="email" placeholder="  votre email" class="text-xxs p-0 border border-gray-300 rounded-l flex-grow mb-4 font-sacramento w-full sm:w-auto" required>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="text-xs  py-4 px-2 bg-red-600 text-white rounded hover:bg-red-700 font-sacramento">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18.707 2.293a1 1 0 0 1 1.414 1.414l-13 13a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L6 12.586l12.293-12.293a1 1 0 0 1 1.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.bg-custom-color {
  background-color: #FCFCFC;
}
.bg-custom-color2 {
  background-color: #FCF3EE;
}
.font-sacramento {
  font-family: 'Sacramento', cursive;
  font-size: 35px;
}
</style>