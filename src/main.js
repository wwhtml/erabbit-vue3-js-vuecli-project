import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize.css";
import "@/assets/styles/common.less";

import ui from "./components/library";
//所谓的插件就是一种可以为vue添加全局功能的工具代码。一个插件可以是一个拥有install()方法的对象，也可以直接是一个安装函数本身（install函数）。

// 插件的使用，在main.js使用app.use(插件)
createApp(App).use(store).use(router).use(ui).mount("#app");
