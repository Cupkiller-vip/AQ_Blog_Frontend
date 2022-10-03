<template>
  <div class="NewWorks">
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
import { ref, type Ref } from "vue";
import { useRouter } from "vue-router";
import Request from "../../utils/axios";

const Router = useRouter();
const works: Ref<any> = ref([]);
works.value = (await Request.get("http://127.0.0.1:9000/api/getNew")).data;
const defaultImage =
  "data:image/png;base64,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";
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
  height: 1680px;
}
.works {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
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
