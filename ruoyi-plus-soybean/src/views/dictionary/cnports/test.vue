<template>
  <div class="p-4">
    <h1>口岸管理页面测试</h1>
    <p>这是一个测试页面，用于验证口岸管理功能是否正常工作。</p>
    
    <div class="mt-4">
      <h2>API 测试</h2>
      <NButton @click="testAPI">测试 API 调用</NButton>
      <div v-if="testResult" class="mt-2">
        <p>测试结果：{{ testResult }}</p>
      </div>
    </div>

    <div class="mt-4">
      <h2>组件测试</h2>
      <CnportsSearch v-model:model="searchParams" @search="handleSearch" @reset="handleReset" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NButton } from 'naive-ui';
import CnportsSearch from './modules/cnports-search.vue';

defineOptions({
  name: 'CnportsTest'
});

const testResult = ref('');
const searchParams = ref<Api.Dictionary.CnportsSearchParams>({
  pageNum: 1,
  pageSize: 10,
  portCode: null,
  portName: null,
  portType: null,
  customsCode: null,
  status: null
});

function testAPI() {
  testResult.value = '模拟 API 调用成功';
}

function handleSearch() {
  console.log('搜索参数:', searchParams.value);
}

function handleReset() {
  console.log('重置搜索');
}
</script>

<style scoped>
.p-4 {
  padding: 1rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
</style>
