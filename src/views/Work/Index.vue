<template>
  <div class="work">
    <div class="breadcrumbs"></div>
    <div class="main">
      <div class="title">{{ work.work_title }}</div>
      <div class="other">
        <div class="updateDate">更新时间：{{ work.updateDate }}</div>
        <div class="username">作者：{{ work.username }}</div>
      </div>
      <div class="content">{{ work.content }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import Request from "@/utils/axios";

type Work = {
  work_id?: string;
  work_title?: string;
  user_id?: string;
  username?: string;
  kind?: string;
  content?: string;
  createDate?: Date;
  updateDate?: Date;
};
const work: Ref<Work> = ref({});
const Route = useRoute();
work.value = (
  await Request.post(
    "http://127.0.0.1:9000/api/work",
    {},
    {
      params: {
        work_id: Route.query.work_id,
        kind: Route.query.kind,
      },
    }
  )
).data;
</script>
<style scoped>
.work {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 10%;
  color: #1c1c1c;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.title {
  font-size: 48px;
}

.other {
  display: flex;
  width: 70%;
  font-size: 24px;
  font-style: italic;
  color: gainsboro;
  padding: 15px 0;
}

.other div {
  display: flex;
  justify-content: center;
  flex: 1;
}

.content {
  font-size: 24px;
  line-height: 32px;
}
</style>
