<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Header></Header>
    <Transition name="fade" mode="out-in">
      <Suspense>
        <component :is="Component"></component>
      </Suspense>
    </Transition>
    <Footer></Footer>
  </RouterView>
</template>

<style scoped></style>
