<script setup lang="ts">
import { NButton, NCard, NCollapse, NCollapseItem, NForm, NFormItemGi, NGrid, NInput, NSelect, NSpace } from 'naive-ui';
import { useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';

defineOptions({
  name: 'CnportsSearch'
});

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const { formRef, validate, restoreValidation } = useNaiveForm();

const model = defineModel<Api.Dictionary.CnportsSearchParams>('model', { required: true });

async function reset() {
  await restoreValidation();
  emit('reset');
}

async function search() {
  await validate();
  emit('search');
}

const portTypeOptions = [
  { label: '海港', value: '1' },
  { label: '空港', value: '2' },
  { label: '陆港', value: '3' },
  { label: '邮路口岸', value: '4' }
];

const statusOptions = [
  { label: '正常', value: '0' },
  { label: '停用', value: '1' }
];
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <NCollapse>
      <NCollapseItem :title="$t('common.search')" name="cnports-search">
        <NForm ref="formRef" :model="model" label-placement="left" :label-width="80">
          <NGrid responsive="screen" item-responsive>
            <NFormItemGi
              :show-feedback="false"
              span="24 s:12 m:6"
              label="口岸代码"
              path="portCode"
              class="pr-24px"
            >
              <NInput v-model:value="model.portCode" placeholder="请输入口岸代码" />
            </NFormItemGi>
            <NFormItemGi
              :show-feedback="false"
              span="24 s:12 m:6"
              label="口岸名称"
              path="portName"
              class="pr-24px"
            >
              <NInput v-model:value="model.portName" placeholder="请输入口岸名称" />
            </NFormItemGi>
            <NFormItemGi
              :show-feedback="false"
              span="24 s:12 m:6"
              label="口岸类型"
              path="portType"
              class="pr-24px"
            >
              <NSelect
                v-model:value="model.portType"
                :options="portTypeOptions"
                placeholder="请选择口岸类型"
                clearable
              />
            </NFormItemGi>
            <NFormItemGi
              :show-feedback="false"
              span="24 s:12 m:6"
              label="所属海关"
              path="customsCode"
              class="pr-24px"
            >
              <NInput v-model:value="model.customsCode" placeholder="请输入海关代码" />
            </NFormItemGi>
            <NFormItemGi
              :show-feedback="false"
              span="24 s:12 m:6"
              label="状态"
              path="status"
              class="pr-24px"
            >
              <NSelect
                v-model:value="model.status"
                :options="statusOptions"
                placeholder="请选择状态"
                clearable
              />
            </NFormItemGi>
            <NFormItemGi :show-feedback="false" span="12" class="pr-24px">
              <NSpace class="w-full" justify="end">
                <NButton @click="reset">
                  <template #icon>
                    <icon-ic-round-refresh class="text-icon" />
                  </template>
                  {{ $t('common.reset') }}
                </NButton>
                <NButton type="primary" ghost @click="search">
                  <template #icon>
                    <icon-ic-round-search class="text-icon" />
                  </template>
                  {{ $t('common.search') }}
                </NButton>
              </NSpace>
            </NFormItemGi>
          </NGrid>
        </NForm>
      </NCollapseItem>
    </NCollapse>
  </NCard>
</template>

<style scoped></style>
