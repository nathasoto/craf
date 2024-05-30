<script setup lang="ts">
import Navbar_home from '@/components/navbarHome.vue'
import Footer_home from '@/components/footerHome.vue'
import NewNavBar from '@/components/newNavBar.vue'
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
</script>

<template>
  <body>
    <header><Navbar_home /></header>

    <main>
      Home
      <PopoverRoot>
        <PopoverTrigger>More info</PopoverTrigger>
        <PopoverPortal>
          <PopoverContent>
            Some more info...
            <PopoverClose />
            <PopoverArrow />
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
    </main>

    <footer><Footer_home /></footer>
  </body>
</template>

<style>
.PopoverTrigger {
  background-color: white;
  border-radius: 4px;
}

.PopoverContent {
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  background-color: white;
}

.PopoverArrow {
  background-color: white;
}
</style>