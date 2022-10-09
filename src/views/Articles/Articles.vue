<template>
  <div class="articles">
    <div class="articlesLogo">{{ articlesLogo }}</div>
    <ul class="themes">
      <li v-for="theme in themes" class="theme">
        <img
          class="themeImage"
          :src="theme.imageUrl || defaultImage"
          alt="themeImage"
        />
        <div class="themeTitle">测试测试{{ theme.title }}</div>
        <ul class="works">
          <li v-for="work in works" class="work" @click="goWork(work.work_id)">
            <img :src="postIcon" alt="postIcon" class="postIcon" />
            <div class="workTitle textOverflow">
              121212121212121212121212121212{{ work.title }}
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="pagination"></div>
  </div>
</template>
<script lang="ts" setup>
import { defaultImage, postIcon } from "@/assets/base64";
import { ref, type Ref } from "vue";
import Request from "@/utils/axios";
import { useRouter } from "vue-router";

const articlesLogo = "所有文章";
const themes: Ref<any> = ref(["", ""]);
const works: Ref<any> = ref(["", "", "", "", ""]);
const Router = useRouter();

function goWork(work_id: string) {
  Router.push({
    path: `/articles/work`,
    query: {
      work_id: work_id,
      kind: "a",
    },
  });
}
</script>
<style scoped>
.articles {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.articlesLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  width: 100%;
  height: 90px;
}

.themes {
  display: grid;
  grid-template-columns: repeat(2, 720px);
  grid-template-rows: repeat(4, 360px);
  column-gap: 120px;
  row-gap: 60px;
}

.theme {
  display: grid;
  grid-template-columns: 288px 432px;
  grid-template-rows: repeat(5, 1fr);
  column-gap: 30px;
  cursor: pointer;
}

.themeImage {
  grid-column: 1 / 2;
  grid-row: 1 / 5;
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.themeTitle {
  display: flex;
  margin: auto;
  font-size: 48px;
  font-style: italic;
  font-weight: bold;
  grid-column: 1 / 2;
  grid-row: 5 / 6;
}

.works {
  display: grid;
  grid-template-rows: repeat(5, 20%);
  grid-column: 2/ 3;
  grid-row: 1 / 6;
}

.work {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 432px;
}

.postIcon {
  height: 40%;
}

.workTitle {
  margin-left: 18px;
  font-size: 24px;
}
</style>
