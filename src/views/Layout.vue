<template>
  <!-- app-top-nav -->
  <app-top-nav></app-top-nav>
  <!-- app-header -->
  <app-header></app-header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <!-- app-footer -->
  <app-footer></app-footer>
</template>

<script>
import AppTopNav from "@/components/app-top-nav.vue";
import AppHeader from "@/components/app-header.vue";
import AppFooter from "@/components/app-footer.vue";

import { useStore } from "vuex";

export default {
  name: "xtx-layout",
  components: {
    AppTopNav,
    AppHeader,
    AppFooter,
  },
  // 获取下分类数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style scoped lang="less"></style>
