<template>
  <div class="NewWorks">
    <div class="newLogo">{{ logoTitle }}</div>
    <ul class="works">
      <li
        v-for="work in works"
        class="work"
        @click="goWork(work.work_id, work.kind)"
      >
        <img class="image" :src="work.image || defaultImage" alt="workImg" />
        <div class="text">
          <span class="title">{{ work.work_title }}</span>
          <div class="content">{{ work.content }}</div>
          <div class="other">
            <span class="keys">{{ work.keys }}</span>
            <span class="date">{{ work.updateTime }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { defaultImage } from "@/assets/base64";
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import Request from "../../utils/axios";

const Router = useRouter();
const works: Ref<any> = ref([]);
works.value = (await Request.get("http://127.0.0.1:9000/api/getNew")).data;
const logoTitle = "最新内容";

function goWork(work_id: string, kind: string) {
  switch (kind) {
    case "a":
      Router.push({
        path: `/articles/work`,
        query: {
          work_id: work_id,
          kind: kind,
        },
      });
      break;
    case "e":
      Router.push({
        path: `/essays/work`,
        query: {
          work_id: work_id,
          kind: kind,
        },
      });
      break;
    case "n":
      Router.push({
        path: `/novels/work`,
        query: {
          work_id: work_id,
          kind: kind,
        },
      });
      break;
  }
}
</script>
<style scoped>
.NewWorks {
  display: flex;
  flex-direction: column;
  height: 1500px;
}

.newLogo {
  display: flex;
  margin: auto;
  font-size: 48px;
}

.works {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  height: 1410px;
}

.work {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 23%;
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.image {
  width: 30%;
  height: 100%;
  object-fit: cover;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 65%;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15%;
  font-size: 36px;
}
.content {
  display: flex;
  flex-direction: row;
  height: 70%;
  font-size: 24px;
}

.other {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
  font-size: 30px;
}
</style>
