<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "./components/home-category.vue";
export default {
  name: "page-home",
  components: { HomeCategory },
};
</script>

<style scoped lang="less">
.xtx-home-page {
  height: 500px;
}
</style>
