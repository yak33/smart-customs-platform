import { request } from '@/service/request';

/** 获取口岸列表 */
export function fetchGetCnportsList(params?: Api.Dictionary.CnportsSearchParams) {
  return request<Api.Dictionary.CnportsList>({
    url: '/dictionary/cnports/list',
    method: 'get',
    params
  });
}

/** 获取口岸详细信息 */
export function fetchGetCnportsDetail(portId: CommonType.IdType) {
  return request<Api.Dictionary.Cnports>({
    url: `/dictionary/cnports/${portId}`,
    method: 'get'
  });
}

/** 新增口岸 */
export function fetchCreateCnports(data: Api.Dictionary.CnportsOperateParams) {
  return request<boolean>({
    url: '/dictionary/cnports',
    method: 'post',
    data
  });
}

/** 修改口岸 */
export function fetchUpdateCnports(data: Api.Dictionary.CnportsOperateParams) {
  return request<boolean>({
    url: '/dictionary/cnports',
    method: 'put',
    data
  });
}

/** 删除口岸 */
export function fetchDeleteCnports(portId: CommonType.IdType) {
  return request<boolean>({
    url: `/dictionary/cnports/${portId}`,
    method: 'delete'
  });
}

/** 批量删除口岸 */
export function fetchBatchDeleteCnports(portIds: CommonType.IdType[]) {
  return request<boolean>({
    url: `/dictionary/cnports/${portIds.join(',')}`,
    method: 'delete'
  });
}

/** 导出口岸列表 */
export function fetchExportCnports(params?: Api.Dictionary.CnportsSearchParams) {
  return request<Blob>({
    url: '/dictionary/cnports/export',
    method: 'post',
    params,
    responseType: 'blob'
  });
}

/** 获取口岸选项列表 */
export function fetchGetCnportsOptions() {
  return request<Api.Dictionary.Cnports[]>({
    url: '/dictionary/cnports/options',
    method: 'get'
  });
}
