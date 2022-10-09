<template>
  <RouterView v-slot="{ Component }">
    <!-- <Transition name="fade" mode="out-in"> -->
      <Suspense>
        <component :is="Component"></component>
      </Suspense>
    <!-- </Transition> -->
  </RouterView>
</template>
<script lang="ts" setup></script>
<style scoped></style>
