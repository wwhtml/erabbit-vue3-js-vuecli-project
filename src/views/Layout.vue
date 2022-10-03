<template>
  <!-- app-top-nav -->
  <app-top-nav></app-top-nav>
  <header>header</header>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <footer>footer</footer>
</template>

<script>
import AppTopNav from "@/components/app-top-nav.vue";
export default {
  name: "xtx-layout",
  components: {
    AppTopNav,
  },
};
</script>

<style scoped lang="less"></style>
