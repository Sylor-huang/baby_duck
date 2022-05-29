<template>
  <div id="Sidebar">
    <el-menu
        :default-active="activeMenu"
        class="border-0"
        :ellipsis="false"
        mode="horizontal"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
        <el-menu-item
          class="border-0"
        >
          <template #title>
                      <span
        @click="change_theme"
      >
        <e-icon
          :name="`${is_current_light_them ? 'MoonNight' : 'Sunny'}`"
          class="text-xl"
          :size="48"
        ></e-icon>
      </span>
          </template>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from "vue";
import SidebarItem from "./SidebarItem";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
let routes = computed(() => {
  return store.state.permission.routes;
});

let { proxy } = getCurrentInstance();

const activeMenu = computed(() => {
  const { meta, fullPath } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return fullPath;
});

let is_current_light_them = computed(() => {
  return proxy.$store.state.app.theme === "default";
});

let change_theme = () => {
  if (is_current_light_them.value) {
    document.querySelector("html").classList.remove("default");
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add("default");
  }
  proxy.$store.commit(
    "app/TOGGLE_THEME",
    is_current_light_them.value ? "dark" : "default"
  );
  // window.location.reload();
};
</script>

