<template>
  <div class="footer">
    <ul class="footerList">
      <li v-for="kind in footerList">
        <span class="kindTitle">{{ kind.title }}</span>
        <ul class="kindList">
          <li v-for="item in kind.list">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const footerList = [
  {
    title: "联系信息",
    list: ["1", "2"],
  },
  {
    title: "网站信息",
    list: ["3", "4"],
  },
  {
    title: "友情链接",
    list: ["5", "6"],
  },
];
</script>
<style scoped>
.footer {
  width: 100%;
  height: 360px;
  padding-top: 120px;
  background-color: #1c1c1c;
}
.footerList {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  color: gainsboro;
}
.kindTitle {
  font-size: 24px;
  font-weight: bold;
}
</style>