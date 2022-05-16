<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = ref()

watch(
    () => route.meta?.layout as string | undefined,
async (newLayout) => {
      const metaLayout = newLayout || 'AppLayoutDefault';
      const component = await import(`../layouts/${metaLayout}.vue`)
      layout.value = markRaw(component?.default)
    }
)
</script>
