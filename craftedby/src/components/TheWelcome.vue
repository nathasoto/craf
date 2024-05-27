<template>

</template>

<script setup>
import { useFetch } from '@vueuse/core'
const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()
</script>