<template>
  <div class="write">
    <span class="instrution">{{ instruction }}</span>
    <Tiptap v-model="content"></Tiptap>
    <div class="setting"></div>
  </div>
</template>
<script lang="ts" setup>
import Tiptap from "@/components/write/Tiptap.vue";
import { ref } from "vue";

let instruction = "于此刻开始你的写作"
const content = ref("<p>A Vue.js wrapper component for tiptap to use.</p>");

</script>
<style scoped>
.write {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
