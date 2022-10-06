<template>
  <!-- 顶部通栏 -->
  <AppTopNav></AppTopNav>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 吸顶头部 -->
  <AppHeaderSticky></AppHeaderSticky>
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppTopNav from "@/components/app-top-nav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";
import AppHeaderSticky from "@/components/app-header-sticky.vue";

import { useStore } from "vuex";

export default {
  name: "xtx-layout",
  components: {
    AppTopNav,
    AppHeader,
    AppFooter,
    AppHeaderSticky,
  },
  // 获取下分类数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
