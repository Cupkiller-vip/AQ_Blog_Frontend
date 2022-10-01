<template>
  <div class="articles">
    <ul class="works">
      <li v-for="work in works" class="work">
        <div></div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from "vue";
import Request from "@/utils/axios";

const works: Ref<unknown> = ref([]);
works.value = (await Request.get("http://127.0.0.1:9000/api/articles")).data;
</script>
<style scoped></style>
