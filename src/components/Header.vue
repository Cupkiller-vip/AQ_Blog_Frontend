<template>
  <div class="header">
    <ul class="headerList">
      <li
        v-for="(item, index) in headerList"
        class="headerListItem"
        :class="{ selected: Route.name === routesName[index] }"
        @click="select(index)"
      >
        {{ item.text }}
      </li>
    </ul>
    <div class="aqLogo">{{ name }}</div>
    <img class="githubLogo" :src="githubLogo" @click="goGithub" />
  </div>
</template>
<script lang="ts" setup>
import { githubLogo } from "@/assets/base64";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const Router = useRouter();
const Route = useRoute();

const name = "AQian";
const github = "https://github.com/Cupkiller-vip";
const headerList = ref([
  {
    text: "首页",
  },
  {
    text: "文章",
  },
  {
    text: "随笔",
  },
  {
    text: "小说",
  },
  {
    text: "关于",
  },
]);
const routesName = ["home", "articles", "essays", "novels", "about"];

async function select(index: number) {
  await Router.push({ name: routesName[index] });
}

function goGithub() {
  window.open(github, "_blank");
}
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 0 5%;
}
.headerList {
  display: flex;
  width: 600px;
}

.headerListItem {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.headerListItem::before {
  content: "";
  position: absolute;
  align-self: flex-end;
  width: 0;
  height: 6%;
  margin-bottom: 5%;
  background-color: gold;
}

.headerListItem:hover::before {
  width: 36%;
  transition: all 0.3s ease-out;
}

.selected::before {
  width: 36%;
  background-color: aquamarine;
}

.aqLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 36px 0 auto;
  width: 120px;
}

.githubLogo {
  height: 70%;
  align-self: center;
  cursor: pointer;
}
</style>
