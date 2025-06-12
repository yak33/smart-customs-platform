<script setup lang="tsx">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { NButton, NCard, NDataTable, NPopconfirm, NTag } from 'naive-ui';
import { useBoolean, useLoading } from '@sa/hooks';
import {
  fetchGetCnportsList,
  fetchDeleteCnports,
  fetchBatchDeleteCnports,
  fetchExportCnports
} from '@/service/api/dictionary/cnports';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { useAuth } from '@/hooks/business/auth';
import { useDownload } from '@/hooks/business/download';
import { $t } from '@/locales';
import TableHeaderOperation from '@/components/advanced/table-header-operation.vue';
import CnportsSearch from './modules/cnports-search.vue';
import CnportsOperateDrawer from './modules/cnports-operate-drawer.vue';

defineOptions({
  name: 'CnportsList'
});

const appStore = useAppStore();
const { hasAuth } = useAuth();
const { download } = useDownload();

const {
  columns,
  columnChecks,
  data,
  getData,
  getDataByPage,
  loading,
  mobilePagination,
  searchParams,
  resetSearchParams
} = useTable({
  apiFn: fetchGetCnportsList,
  apiParams: {
    pageNum: 1,
    pageSize: 10,
    portCode: null,
    portName: null,
    portType: null,
    customsCode: null,
    status: null
  },
  columns: () => [
    {
      type: 'selection',
      align: 'center',
      width: 48
    },
    {
      key: 'index',
      title: $t('common.index'),
      align: 'center',
      width: 64
    },
    {
      key: 'portCode',
      title: '口岸代码',
      align: 'center',
      minWidth: 100
    },
    {
      key: 'portName',
      title: '口岸名称',
      align: 'center',
      minWidth: 120
    },
    {
      key: 'portNameEn',
      title: '英文名称',
      align: 'center',
      minWidth: 150
    },
    {
      key: 'portType',
      title: '口岸类型',
      align: 'center',
      width: 100,
      render: row => {
        const typeMap: Record<string, { label: string; type: NaiveUI.ThemeColor }> = {
          '1': { label: '海港', type: 'primary' },
          '2': { label: '空港', type: 'info' },
          '3': { label: '陆港', type: 'warning' },
          '4': { label: '邮路口岸', type: 'error' }
        };
        const type = typeMap[row.portType];
        return type ? <NTag type={type.type}>{type.label}</NTag> : <span>{row.portType}</span>;
      }
    },
    {
      key: 'customsName',
      title: '所属海关',
      align: 'center',
      minWidth: 120
    },
    {
      key: 'provinceName',
      title: '省份',
      align: 'center',
      width: 100
    },
    {
      key: 'cityName',
      title: '城市',
      align: 'center',
      width: 100
    },
    {
      key: 'status',
      title: $t('common.status'),
      align: 'center',
      width: 100,
      render: row => {
        if (row.status === null) {
          return <span></span>;
        }
        const status = row.status === '0';
        const tagType = status ? 'success' : 'warning';
        const label = status ? $t('common.enable') : $t('common.disable');
        return <NTag type={tagType}>{label}</NTag>;
      }
    },
    {
      key: 'sort',
      title: '排序',
      align: 'center',
      width: 80
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          {hasAuth('dictionary:cnports:edit') && (
            <NButton type="primary" ghost size="small" onClick={() => handleEdit(row.portId)}>
              {$t('common.edit')}
            </NButton>
          )}
          {hasAuth('dictionary:cnports:remove') && (
            <NPopconfirm onPositiveClick={() => handleDelete(row.portId)}>
              {{
                default: () => $t('common.confirmDelete'),
                trigger: () => (
                  <NButton type="error" ghost size="small">
                    {$t('common.delete')}
                  </NButton>
                )
              }}
            </NPopconfirm>
          )}
        </div>
      )
    }
  ]
});

const {
  drawerVisible,
  operateType,
  editingData,
  handleAdd,
  handleEdit,
  checkedRowKeys,
  onBatchDeleted
} = useTableOperate(data, getData);

async function handleBatchDelete() {
  const { error } = await fetchBatchDeleteCnports(checkedRowKeys.value);
  if (!error) {
    onBatchDeleted();
  }
}

async function handleDelete(id: string) {
  const { error } = await fetchDeleteCnports(id);
  if (!error) {
    await getData();
  }
}

async function handleExport() {
  const { error } = await fetchExportCnports(searchParams);
  if (!error) {
    download('口岸数据.xlsx');
  }
}

function handleReset() {
  resetSearchParams();
  getDataByPage();
}
</script>

<template>
  <div class="h-full flex-col-stretch gap-12px overflow-hidden lt-sm:overflow-auto">
    <CnportsSearch v-model:model="searchParams" @reset="handleReset" @search="getDataByPage" />
    <NCard :title="'口岸管理'" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="checkedRowKeys.length === 0"
          :loading="loading"
          :show-add="hasAuth('dictionary:cnports:add')"
          :show-delete="hasAuth('dictionary:cnports:remove')"
          :show-export="hasAuth('dictionary:cnports:export')"
          @add="handleAdd"
          @delete="handleBatchDelete"
          @refresh="getData"
          @export="handleExport"
        />
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="!appStore.isMobile"
        :scroll-x="962"
        :loading="loading"
        remote
        :row-key="row => row.portId"
        :pagination="mobilePagination"
        class="h-full"
      />
      <CnportsOperateDrawer
        v-model:visible="drawerVisible"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getDataByPage"
      />
    </NCard>
  </div>
</template>

<style scoped></style>
