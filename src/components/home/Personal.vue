<template>
  <div class="personal">
    <div class="avatar"></div>
    <div class="text" @click="goAbout">AQian</div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const Router = useRouter();
function goAbout() {
  Router.push({ name: "about" });
}
</script>
<style scoped>
.personal {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #1c1c1c;
  height: 480px;
}
.avatar {
  position: relative;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  background-image: url("@/assets/home/personal/avatar.jpg");
  background-position-y: 30%;
  background-size: cover;
}

.text {
  font-size: 48px;
  color: gold;
  cursor: pointer;
}

.text::before {
  content: "欢迎来到";
  color: #fff;
}

.text::after {
  content: "的博客";
  color: #fff;
}
</style>
