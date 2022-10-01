<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header></Header>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <Suspense>
        <component :is="Component"></component>
      </Suspense>
    </Transition>
  </RouterView>
  <Footer></Footer>
</template>

<style scoped></style>
