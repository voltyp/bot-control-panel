<template>
  <section class="layout">
    <app-layout-header class="layout-header" />
    <app-layout-sidebar class="layout-sidebar" />

    <div class="layout-content">
      <slot class="layout-content" />
    </div>
  </section>
</template>

<script setup lang="ts">
import AppLayoutSidebar from "@/layouts/AppLayoutSidebar.vue";
import AppLayoutHeader from "@/layouts/AppLayoutHeader.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 0fr 1fr;
  grid-template-rows: 0fr 1fr;
  height: 100vh;

  &-header {
    grid-column: 1 / 3;
  }

  &-content {
    padding: 20px 20px 0;
  }
}
</style>
