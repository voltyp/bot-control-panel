<template>
  <div class="sidebar">
    <ul>
      <li
          v-for="(item, idx) in menu"
          :key="idx"
          :style="{ 'font-style': activeItem ? 'bold' : 'normal' }"
      >
        <router-link :to="{ name: item.name }">
          {{ item.label }}
        </router-link>

      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeItem = ref(0)
const menu = [
  {
    label: 'main',
    name: 'home'
  },
  {
    label: 'about-us',
    name: 'about-us'
  },
]

</script>

<style lang="scss">
.sidebar {
  width: 250px;
  height: calc(100vh - 50px);
  background-color: gray;
}
</style>

