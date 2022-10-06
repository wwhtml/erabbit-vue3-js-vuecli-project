<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory></HomeCategory>
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from "./components/home-category.vue";
import HomeBanner from "./components/home-banner.vue";
export default {
  name: "page-home",
  components: { HomeCategory, HomeBanner },
};
</script>

<style scoped lang="less">
.page-home {
  height: 1500px;
}
</style>
