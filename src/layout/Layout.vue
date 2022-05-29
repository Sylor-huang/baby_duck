<template>
  <div>
    <el-container>
      <el-header class="shadow-md">
        <el-scrollbar>
          <div class="flex flex-row">
            <router-link class="inline-block" to="/">
              <img src="@/assets/logo.png" class="h-12 my-1.5 mx-auto" />
            </router-link>
            <div class="flex-1 text-right">
              <Sidebar></Sidebar>
            </div>
          </div>
        </el-scrollbar>
      </el-header>
      <el-main>
        <AppMain />
      </el-main>
      <el-footer>
        <span class="mr-4">{{ current_date.getFullYear() }} © BASE VUE</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Sidebar, AppMain } from "./components";
const current_date = new Date();
</script>

