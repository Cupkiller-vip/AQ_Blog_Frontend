<template>
  <div class="statistics">
    <div class="table">
      <div class="pieChart">
        <div class="pieChart-image"></div>
        <div class="pieChart-text"></div>
      </div>
      <div class="lineChart"></div>
      <div class="extraText"></div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.statistics {
  display: flex;
  height: 720px;
}
.table {
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 3fr 2fr;
  margin: auto;
  height: 600px;
  width: 80%;
}
.pieChart {
  display: flex;
  flex-direction: column;
  justify-items: space-around;
  align-items: center;
  grid-row: 1/3;
  grid-column: 1/2;
}

.lineChart {
  display: flex;
}

.extraText {
  display: grid;
}
</style>
