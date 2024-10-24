<template>
  <div class="min-h-screen bg-gradient-to-b from-yellow-300 to-green-300">
    <section class="max-w-6xl mx-auto py-16 px-4">
      <h1 class="text-5xl font-bold text-gray-800">Compensates</h1>
      <p class="my-4">
        We made some mistakes during the sale process, which caused our tokens
        to be sold by bots in large quantities, resulting in losses for our
        whitelist users. We will provide compensation for these users in the
        future. The specific compensation measures have yet to be determined. We
        will first list these whitelist wallets.
      </p>

      <!-- 总数显示 -->
      <div class="my-6">
        <span class="text-lg font-semibold">
          Total Addresses: {{ totalAddresses }}
        </span>
      </div>

      <!-- 地址列表展示区域 -->
      <div class="rounded-lg shadow-lg">
        <!-- 分页控制 -->
        <div class="mb-4 flex justify-center items-center space-x-4">
          <button
            @click="currentPage > 1 && (currentPage--)"
            :disabled="currentPage === 1"
            class="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button
            @click="currentPage < totalPages && (currentPage++)"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <!-- 双列地址列表 -->
        <div class="grid grid-cols-2 gap-8">
          <!-- 左列 -->
          <div class=" rounded p-4">
            <h3 class="text-lg font-semibold mb-4">Column 1</h3>
            <div v-for="(address, index) in leftColumnAddresses" 
                 :key="index"
                  class="p-2 hover:bg-yellow-50 hover:bg-opacity-40">
              <span class="font-mono">
                {{ (currentPage - 1) * perPage + index + 1 }}. {{ address }}
              </span>
            </div>
          </div>
          <!-- 右列 -->
          <div class="rounded p-4">
            <h3 class="text-lg font-semibold mb-4">Column 2</h3>
            <div v-for="(address, index) in rightColumnAddresses" 
                 :key="index"
                 class="p-2 hover:bg-yellow-50 hover:bg-opacity-40">
              <span class="font-mono">
                {{ (currentPage - 1) * perPage + index + halfPage + 1 }}. {{ address }}
              </span>
            </div>
          </div>
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
const perPage = 100
const halfPage = 50
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