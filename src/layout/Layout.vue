<template>
  <div class="bg-gradient-to-b from-yellow-300 to-green-300">
    <header class="p-4">
      <nav class="max-w-6xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img
            src="@/assets/duck-logo.svg"
            alt="Baby Duck Logo"
            class="w-12 h-12"
          />
          <span class="text-2xl font-bold text-gray-800"
            >Baby Duck Community</span
          >
        </div>
        <div class="space-x-6">
          <router-link to="/" class="text-gray-800 hover:text-gray-600">
            Home
          </router-link>
          <router-link
            to="/white_lists"
            class="text-gray-800 hover:text-gray-600"
          >
            Whitelist Compensate
          </router-link>
        </div>
      </nav>
    </header>
    <AppMain />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Sidebar, AppMain } from "./components";
const current_date = new Date();
import ResizeHook from "./hook/ResizeHandler";
ResizeHook();
</script>

