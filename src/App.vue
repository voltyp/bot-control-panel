<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";

let count = ref(0);

function increment() {
  count.value++
}

const mount = onMounted(() => {
  console.log('process', import.meta.env)
})
</script>

<style lang="scss">
  @import './assets/base.css';
</style>
