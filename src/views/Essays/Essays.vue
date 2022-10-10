<template>
  <div class="essays">
    <div class="essaysLogo">{{ theme }}</div>
    <ul class="works">
      <li v-for="work in works" class="work borderColor">
        <span class="title textOverflow">测试标题测试标题测试标题</span>
        <span class="content textOverflow">测试内容测试内容测试内容</span>
        <span class="date">测试日期</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from "vue";
import Request from "@/utils/axios";
import { useRouter } from "vue-router";

const Router = useRouter();
const theme = "所有随笔";
const works = ["", "", "", "", "", ""];
// const works: Ref<any> = ref([]);
// works.value = (await Request.get("http://127.0.0.1:9000/api/essays")).data;

function goWork(work_id: string) {
  Router.push({
    path: `/articles/work`,
    query: {
      work_id: work_id,
      kind: "e",
    },
  });
}
</script>
<style scoped>
.essays {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.essaysLogo {
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
  width: 75%;
  height: 1950px;
  margin-top: 60px;
}

.work {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 300px;
  border-radius: 16px;
}

.title {
  display: flex;
  align-items: center;
  font-size: 128px;
  height: 70%;
  width: 960px;
}

.content {
  display: flex;
  align-items: center;
  font-size: 36px;
  height: 30%;
  width: 960px;
}

.date {
  font-size: 36px;
  width: fit-content;
}
</style>
