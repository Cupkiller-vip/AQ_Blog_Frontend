<template>
  <div class="novels">
    <div class="novelsLogo">{{ theme }}</div>
    <ul class="works">
      <li v-for="work in works" class="work borderColor">
        <img
          :src="work.imageUrl || defaultImage"
          alt="workImage"
          class="workImage"
        />
        <span class="title">123123123123{{ work.title }}</span>
        <div class="introduction">
          简介：1231212323123123{{ work.introduction }}
        </div>
        <div class="latestChapter">
          <span>第33章</span>
          <span>XXXXXXX</span>
          <!-- <span>{{ work.latestChapter }}</span> -->
        </div>
        <span class="updateDate">{{ work.updateDate }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { defaultImage } from "@/assets/base64";
import { ref, type Ref } from "vue";
import Request from "@/utils/axios";

const theme = "所有小说";
const works: Ref<any> = ref([]);
works.value = (await Request.get("http://127.0.0.1:9000/api/novels")).data;
</script>
<style scoped>
.novels {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.novelsLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  width: 100%;
  height: 90px;
}

.works {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 1920px;
}

.work {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 450px;
}

.workImage {
  width: 45%;
  height: 80%;
  object-fit: contain;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 20%;
  font-size: 36px;
}

.introduction {
  padding: 10px;
  width: calc(55% - 20px);
  height: calc(60% - 20px);
  font-size: 28px;
}

.latestChapter {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 32px;
  height: 20%;
}

.updateDate {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 20%;
}
</style>
