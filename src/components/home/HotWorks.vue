<template>
  <div class="hotWorks">
    <div class="hotLogo">{{ logoTitle }}</div>
    <ul class="works">
      <li
        v-for="work in works"
        class="work"
        @click="goWork(work.work_id, work.kind)"
      >
        <div class="imageBox">
          <img class="image" :src="work.imageUrl" alt="workImg" />
        </div>
        <span class="title">{{ work.title }}</span>
        <div class="content">{{ work.content }}</div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import testImg from "@/assets/home/hot/101338955_p0.jpg";
import { useRouter } from "vue-router";
import Request from "../../utils/axios";

const Router = useRouter();
const works = [
  {
    imageUrl: testImg,
    title: "测试标题",
    content:
      "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
    id: "7",
    keys: ["1", "2", "3"],
    updateTime: "2002-2-28",
    kind: "a",
  },
  {
    imageUrl: testImg,
    title: "测试标题",
    content:
      "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
    work_id: "4",
    keys: ["1", "2", "3"],
    updateTime: "2002-2-28",
    kind: "a",
  },
  {
    imageUrl: testImg,
    title: "测试标题",
    content:
      "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
    id: "3",
    keys: ["1", "2", "3"],
    updateTime: "2002-2-28",
    kind: "a",
  },
  {
    imageUrl: testImg,
    title: "测试标题",
    content:
      "测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容",
    id: "6",
    keys: ["1", "2", "3"],
    updateTime: "2002-2-28",
    kind: "a",
  },
];
const logoTitle = "热门内容";

function goWork(work_id: string | undefined, kind: string) {
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
@keyframes borderRotation {
  0% {
    border-image: linear-gradient(#e66465, #9198e5) 1;
  }

  25% {
    border-image: linear-gradient(to left, #e66465, #9198e5) 1;
  }

  50% {
    border-image: linear-gradient(to top, #e66465, #9198e5) 1;
  }

  75% {
    border-image: linear-gradient(to right, #e66465, #9198e5) 1;
  }

  100% {
    border-image: linear-gradient(#e66465, #9198e5) 1;
  }
}

.hotWorks {
  display: flex;
  flex-direction: column;
  height: 480px;
}

.hotLogo {
  display: flex;
  margin: auto;
  font-size: 48px;
}

.works {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto auto;
  width: 90%;
  height: 360px;
}

.work {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(24% - 6px);
  height: 100%;
  cursor: pointer;
  border: 3px solid;
  border-radius: 5px;
  border-image: linear-gradient(#e66465, #9198e5) 1;
  transition: all 0.5s ease;
}

.work:hover {
  animation: borderRotation 2s linear infinite;
}

.imageBox {
  height: 72%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.work:hover .image {
  transform: scale(1.1);
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 28px;
  height: 16%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 16px;
  line-height: 24px;
  height: 16%;
}
</style>
