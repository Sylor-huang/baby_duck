<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-300 to-green-300">
    <section class="max-w-6xl mx-auto py-8 md:py-16 px-4">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-800">Compensates</h1>
      <p class="my-4 text-sm md:text-base">
        We made some mistakes during the sale process, which caused our tokens
        to be sold by bots in large quantities, resulting in losses for our
        whitelist users. We will provide compensation for these users in the
        future. The specific compensation measures have yet to be determined. We
        will first list these whitelist wallets.
      </p>

      <!-- 总数显示 -->
      <div class="my-4 md:my-6">
        <span class="text-base md:text-lg font-semibold">
          Total Addresses: {{ totalAddresses }}
        </span>
      </div>

      <!-- 地址列表展示区域 -->
      <div class="rounded-lg shadow-lg">
        <!-- 分页控制 -->
        <div class="mb-4 flex flex-wrap justify-center items-center gap-2 md:gap-4 p-2">
          <button
            @click="currentPage > 1 && (currentPage--)"
            :disabled="currentPage === 1"
            class="px-2 md:px-3 py-1 border rounded disabled:opacity-50 text-sm md:text-base"
          >
            Previous
          </button>
          <span class="text-sm md:text-base">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="currentPage < totalPages && (currentPage++)"
            :disabled="currentPage === totalPages"
            class="px-2 md:px-3 py-1 border rounded disabled:opacity-50 text-sm md:text-base"
          >
            Next
          </button>
        </div>

        <!-- 响应式地址列表 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <!-- 左列 -->
          <div class="rounded p-2 md:p-4">
            <h3 class="text-base md:text-lg font-semibold mb-2 md:mb-4">Column 1</h3>
            <div v-for="(address, index) in leftColumnAddresses" 
                 :key="index"
                 class="p-2 hover:bg-yellow-50 hover:bg-opacity-40 break-all">
              <span class="font-mono text-xs md:text-sm">
                {{ (currentPage - 1) * perPage + index + 1 }}. {{ address }}
              </span>
            </div>
          </div>
          <!-- 右列（在移动端会变成下方显示） -->
          <div class="rounded p-2 md:p-4">
            <h3 class="text-base md:text-lg font-semibold mb-2 md:mb-4">Column 2</h3>
            <div v-for="(address, index) in rightColumnAddresses" 
                 :key="index"
                 class="p-2 hover:bg-yellow-50 hover:bg-opacity-40 break-all">
              <span class="font-mono text-xs md:text-sm">
                {{ (currentPage - 1) * perPage + index + halfPage + 1 }}. {{ address }}
              </span>
            </div>
          </div>
        </div>

        <!-- 底部分页控制 - 为长列表提供便利 -->
        <div class="mt-4 flex flex-wrap justify-center items-center gap-2 md:gap-4 p-2">
          <button
            @click="currentPage > 1 && (currentPage--)"
            :disabled="currentPage === 1"
            class="px-2 md:px-3 py-1 border rounded disabled:opacity-50 text-sm md:text-base"
          >
            Previous
          </button>
          <span class="text-sm md:text-base">Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="currentPage < totalPages && (currentPage++)"
            :disabled="currentPage === totalPages"
            class="px-2 md:px-3 py-1 border rounded disabled:opacity-50 text-sm md:text-base"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
// 直接导入文本文件
import addressesText from '@/assets/files/wallets.txt?raw';

// 状态管理
const perPage = 100;
const halfPage = 50;
const addresses = ref([]);
const currentPage = ref(1);
const totalAddresses = ref(0);

// 处理地址数据
const processAddresses = () => {
  addresses.value = [...new Set(
    addressesText.split('\n')
      .map(line => line.trim())
      .filter(line => line)
  )];
  totalAddresses.value = addresses.value.length;
};

// 计算属性
const totalPages = computed(() => 
  Math.ceil(addresses.value.length / perPage)
);

const currentPageAddresses = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return addresses.value.slice(start, start + perPage);
});

const leftColumnAddresses = computed(() => {
  return currentPageAddresses.value.slice(0, halfPage);
});

const rightColumnAddresses = computed(() => {
  return currentPageAddresses.value.slice(halfPage);
});

// 页面加载时处理数据
onMounted(() => {
  processAddresses();
});
</script>