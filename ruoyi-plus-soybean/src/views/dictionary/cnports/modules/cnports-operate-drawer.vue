<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import {
  NButton,
  NDrawer,
  NDrawerContent,
  NForm,
  NFormItemGi,
  NGrid,
  NInput,
  NInputNumber,
  NSelect,
  NSpace
} from 'naive-ui';
import { fetchCreateCnports, fetchUpdateCnports } from '@/service/api/dictionary/cnports';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';

defineOptions({
  name: 'CnportsOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.Dictionary.Cnports | null;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'submitted'): void;
}

const emit = defineEmits<Emits>();

const visible = defineModel<boolean>('visible', {
  default: false
});

const { formRef, validate, restoreValidation } = useNaiveForm();
const { createRequiredRule } = useFormRules();

const title = computed(() => {
  const titles: Record<NaiveUI.TableOperateType, string> = {
    add: '新增口岸',
    edit: '编辑口岸'
  };
  return titles[props.operateType];
});

type Model = Api.Dictionary.CnportsOperateParams;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    portCode: '',
    portName: '',
    portNameEn: '',
    portType: '',
    customsCode: '',
    customsName: '',
    provinceCode: '',
    provinceName: '',
    cityCode: '',
    cityName: '',
    status: '0',
    sort: 0,
    remark: ''
  };
}

type RuleKey = Extract<keyof Model, 'portCode' | 'portName' | 'portType'>;

const rules: Record<RuleKey, App.Global.FormRule> = {
  portCode: createRequiredRule('请输入口岸代码'),
  portName: createRequiredRule('请输入口岸名称'),
  portType: createRequiredRule('请选择口岸类型')
};

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

function handleUpdateModelWhenEdit() {
  if (props.operateType === 'add') {
    Object.assign(model, createDefaultModel());
    return;
  }

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model, props.rowData);
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();

  // request
  if (props.operateType === 'add') {
    const { error } = await fetchCreateCnports(model);
    if (error) return;
  }

  if (props.operateType === 'edit') {
    const { error } = await fetchUpdateCnports(model);
    if (error) return;
  }

  window.$message?.success($t('common.updateSuccess'));
  closeDrawer();
  emit('submitted');
}

watch(visible, () => {
  if (visible.value) {
    handleUpdateModelWhenEdit();
    restoreValidation();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" :title="title" display-directive="show" :width="800" class="max-w-90%">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model" :rules="rules">
        <NGrid :cols="2" :x-gap="18">
          <NFormItemGi :span="1" label="口岸代码" path="portCode">
            <NInput v-model:value="model.portCode" placeholder="请输入口岸代码" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="口岸名称" path="portName">
            <NInput v-model:value="model.portName" placeholder="请输入口岸名称" />
          </NFormItemGi>
          <NFormItemGi :span="2" label="口岸英文名称" path="portNameEn">
            <NInput v-model:value="model.portNameEn" placeholder="请输入口岸英文名称" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="口岸类型" path="portType">
            <NSelect
              v-model:value="model.portType"
              :options="portTypeOptions"
              placeholder="请选择口岸类型"
            />
          </NFormItemGi>
          <NFormItemGi :span="1" label="状态" path="status">
            <NSelect
              v-model:value="model.status"
              :options="statusOptions"
              placeholder="请选择状态"
            />
          </NFormItemGi>
          <NFormItemGi :span="1" label="海关代码" path="customsCode">
            <NInput v-model:value="model.customsCode" placeholder="请输入海关代码" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="海关名称" path="customsName">
            <NInput v-model:value="model.customsName" placeholder="请输入海关名称" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="省份代码" path="provinceCode">
            <NInput v-model:value="model.provinceCode" placeholder="请输入省份代码" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="省份名称" path="provinceName">
            <NInput v-model:value="model.provinceName" placeholder="请输入省份名称" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="城市代码" path="cityCode">
            <NInput v-model:value="model.cityCode" placeholder="请输入城市代码" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="城市名称" path="cityName">
            <NInput v-model:value="model.cityName" placeholder="请输入城市名称" />
          </NFormItemGi>
          <NFormItemGi :span="1" label="排序" path="sort">
            <NInputNumber v-model:value="model.sort" placeholder="请输入排序" class="w-full" />
          </NFormItemGi>
          <NFormItemGi :span="2" label="备注" path="remark">
            <NInput
              v-model:value="model.remark"
              type="textarea"
              :rows="3"
              placeholder="请输入备注"
            />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <template #footer>
        <NSpace class="w-full pt-16px" :size="24" justify="end">
          <NButton class="w-72px" @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton class="w-72px" type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped></style>
